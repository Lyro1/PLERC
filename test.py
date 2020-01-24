import networkx as nx
import osmnx as ox
import gps_module.address as gps
import requests
from matplotlib import pyplot as plt
import matplotlib.cm as cm
import matplotlib.colors as colors
import sys
import geopy
from geopy.geocoders import Nominatim
ox.config(use_cache=True, log_console=True)
ox.__version__

city_name = input("Quelle ville ?")
if (city_name == "" or city_name == None):
    city_name = 'Biars-Sur-Cere'

print("Chargement du graphe de " + city_name)

origin_name = input("Adresse de départ :")
if (origin_name == "" or origin_name == None):
    origin_name = "27 allee pierre loti biars-sur-cere"

destination_name = input("Adresse d'arrivée :")
if (destination_name == "" or destination_name == None):
    destination_name = "2 rue du stade biars-sur-cere"

# get a graph for some city
G2 = ox.graph_from_place(
    city_name,
    simplify=False,
    retain_all=True,
    network_type='drive',
)

originX, originY = gps.gps_from_address(origin_name)
destinationX, destinationY = gps.gps_from_address(destination_name)

print((originX, originY))
print((destinationX, destinationY))

origin_node = ox.get_nearest_node(G2, (originY, originX), method='euclidean')
destination_node = ox.get_nearest_node(G2, (destinationY, destinationX), method='euclidean')

route = nx.shortest_path(G2, origin_node, destination_node, weight='length')
fig, ax = ox.plot_graph_route(G2, route, fig_height=20, fig_width=20)

# get the nearest network node to each point

#good_orig_node = ox.get_nearest_node(G2, (25.070661, 55.137911), method='euclidean')
#dest_node = ox.get_nearest_node(G2, (25.079223, 55.146241), method='euclidean')



# find the route between these nodes then plot it
#route = nx.shortest_path(G2, good_orig_node, dest_node, weight='length')
#fig, ax = ox.plot_graph_route(G2, route, fig_height=20, fig_width=20)
