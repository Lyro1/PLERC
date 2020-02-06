from django.shortcuts import render
from django.http import HttpResponse, Http404
import linear_program_module.linear_program as lp
import osmnx as ox
import gps_module.address as gps
import os
import matplotlib

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
    try:
        f = open('temp.png')
        f.close()
        o.remove('temp.png')
    except IOError:
        return

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
    fig, ax = ox.plot_graph_route(graph, path, fig_height=20, fig_width=20)
    matplotlib.use('agg')
    fig.savefig(os.path.dirname(os.path.abspath(__file__)) + '/temp.jpeg', format="jpeg")
    try:
        with open(os.path.dirname(os.path.abspath(__file__)) + '/temp.jpeg', 'rb') as file:
            return HttpResponse(file.read(), content_type='image/jpeg')
    except IOError:
        return Http404

def path_data(request, ville, source, destination):
    raise Http404