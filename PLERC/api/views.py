from django.shortcuts import render
from django.http import HttpResponse, Http404
import linear_program_module.linear_program as lp
import osmnx as ox
import gps_module.address as gps
import map_module.save as save
import os

graph = None
city = None
def load_graph(city_name):
    global graph
    global city
    graph = ox.graph_from_place(
        city_name,
        simplify=False,
        retain_all=True,
        network_type='drive',
    )
    city = city_name

def location(request, ville, adresse):
    if (city != ville):
        load_graph(ville)
    dep = gps.gps_from_address(adresse +" "+ ville)
    loc = ox.get_nearest_node(graph, dep, method='euclidean')
    return HttpResponse(loc)

def local_gps(ville, address):
    return gps.gps_from_address(address + " " + ville)


def path(request, ville, source, destination):
    if (city != ville):
        load_graph(ville)
    path  = lp.get_shortest_path(graph, local_gps(ville , source), local_gps(ville, destination))
    html = save.get_html_from_path(graph, path)
    try:
        os.remove('api/template/path.html')
    except FileNotFoundError:
        pass
    f = open('api/template/path.html', 'w+')
    f.write(html)
    return render(request, 'path.html')


def path_data(request, ville, source, destination):
    raise Http404