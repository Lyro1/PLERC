from django.shortcuts import render
from django.http import HttpResponse, Http404, JsonResponse
import linear_program_module.linear_program as lp
import osmnx as ox
import networkx as nx
import gps_module.address as gps
import map_module.save as save
import map_module.stats as stats
import time
import os

graph = None
city = None


def load_graph(city_name):
    global graph
    global city
    graph = ox.simplify_graph(ox.graph_from_place(
        city_name,
        simplify=False,
        retain_all=True,
        network_type='drive',
    ))
    city = city_name


def location(request, ville, adresse):
    if city != ville:
        load_graph(ville)
    dep = gps.gps_from_address(adresse + " " + ville)
    loc = ox.get_nearest_node(graph, dep, method='euclidean')
    return HttpResponse(loc)


def local_gps(ville, address):
    return gps.gps_from_address(address + " " + ville)


def path(request, trafic, ville, source, destination, algo):

    if city != ville:
        load_graph(ville)

    weights = None
    weights_realtime = None
    path = None
    if algo != "djikstra":
        if trafic == "trafic":
            path_realtime = lp.get_shortest_path_realtime(graph, local_gps(ville, source), local_gps(ville, destination))
            path = path_realtime[0]
            weights = path_realtime[1]
            weights_realtime = path_realtime[2]
        else:
            path = lp.get_shortest_path(graph, local_gps(ville, source), local_gps(ville, destination))
    else:
        origin = ox.get_nearest_node(graph, local_gps(ville, source))
        dest = ox.get_nearest_node(graph, local_gps(ville, destination))
        path = nx.shortest_path(graph, origin, dest)

    if trafic == "trafic":
        html = save.get_html_from_path(graph, path, True, weights, weights_realtime)
    else:
        html = save.get_html_from_path(graph, path)

    try:
        os.remove('api/template/path.html')
    except FileNotFoundError:
        pass

    f = open('api/template/path.html', 'w+')
    f.write(html)
    return render(request, 'path.html')


def path_data(request, trafic, ville, source, destination, algo):
    res = {}
    weights = None
    weights_realtime = None
    path = None

    if city != ville:
        load_graph(ville)

    if algo != "djikstra":
        if trafic == "trafic":
            path_realtime = lp.get_shortest_path_realtime(graph, local_gps(ville, source), local_gps(ville, destination))
            path = path_realtime[0]
            weights = path_realtime[1]
            weights_realtime = path_realtime[2]
        else:
            path = lp.get_shortest_path(graph, local_gps(ville, source), local_gps(ville, destination))
    else:
        origin = ox.get_nearest_node(graph, local_gps(ville, source))
        dest = ox.get_nearest_node(graph, local_gps(ville, destination))
        path = nx.shortest_path(graph, origin, dest)

    detailed_path = lp.get_detailled_path(path, graph.edges(data=True))
    length, speed, path_time = stats.get_path_stats(detailed_path)
    res["length"] = length
    res["speed"] = speed
    res["time"] = path_time
    actual_time = time.localtime(time.time())
    res["departure"] = str(actual_time[3]) + "h" + str(actual_time[4])
    arrival_time = stats.will_arrive(path_time)
    res["arrival"] = arrival_time
    return JsonResponse(res)
