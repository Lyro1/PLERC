import osmnx as ox
import gps_module.address as gps
import linear_program_module.linear_program as lp
import geopy
from map_module.save import *
from map_module.trafic import *

ox.config(use_cache=True, log_console=True)
ox.__version__

# Program variables
city_name = 'Biars-sur-Cere'
origin_name = "2 rue du stade"
destination_name = "24 allee pierre loti"


# Search origin and destination only in the city we are focusing on
origin_name, destination_name = origin_name + " " + city_name, destination_name + " " + city_name

# Build the street network of the given city
G2 = ox.graph_from_place(
        city_name,
        simplify=False,
        retain_all=True,
        network_type='drive',
    )

# Simplify the graph
G2 = ox.simplify_graph(G2)

# Avoid network issue with GeoCoder
while True:
    try:
        origin = gps.gps_from_address(origin_name)
        destination = gps.gps_from_address(destination_name)
        break
    except geopy.exc.GeocoderUnavailable:
        continue

originPoint = ox.get_nearest_node(G2, origin)
destinationPoint = ox.get_nearest_node(G2, destination)

path = nx.shortest_path(G2, originPoint, destinationPoint)
print("NetworkX Shortest Path : " + str(path))
path = lp.get_shortest_path(G2, origin, destination)
print("Get Shortest Path : " + str(path))
path, weight, weight_realtime = lp.get_shortest_path_realtime(G2, origin, destination)
print("Get Shortest Path Realtime : " + str(path))

# print(get_html_from_path(G2, path))

