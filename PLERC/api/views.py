from django.shortcuts import render
from django.http import HttpResponse, Http404
import gps_module.address as gps
import osmnx as ox


graph = None
city = None

# Create your views here.
def location(request, ville, adresse):
    if (city != ville):
        load_graph(ville)
    dep = gps.gps_from_address(adresse +" "+ ville)
    loc = ox.get_nearest_node(graph, dep, method='euclidean')
    return loc

def path(request, ville, source, destination):
    raise Http404

def path_data(request, ville, source, destination):
    raise Http404