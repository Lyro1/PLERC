from django.shortcuts import render
from django.http import HttpResponse, Http404
from linear_program_module import matrix
import osmnx as ox
# Create your views here.
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
    #test
    raise Http404

def path(request, ville, source, destination):
    raise Http404

def path_data(request, ville, source, destination):
    raise Http404