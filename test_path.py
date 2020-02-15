import osmnx as ox
import networkx as nx
import gps_module.address as gps
import linear_program_module.linear_program as lp
import geopy
import pytest

ox.config(use_cache=True, log_console=True)
ox.__version__

city_name = 'Versailles'
origin_name = "6 Rue des Missionnaires"
destination_name = "32 Avenue de Paris"

origin_name, destination_name = origin_name + " " + city_name, destination_name + " " + city_name

G2 = ox.graph_from_place(
        city_name,
        simplify=False,
        retain_all=True,
        network_type='drive',
    )

while True:
    try:
        origin = gps.gps_from_address(origin_name)
        destination = gps.gps_from_address(destination_name)
        break
    except geopy.exc.GeocoderUnavailable:
        continue

G2_opti = ox.simplify_graph(G2)

originPoint = ox.get_nearest_node(G2, origin)
destinationPoint = ox.get_nearest_node(G2, destination)

def test_nx_opti_shortest_path():
    path1 = nx.shortest_path(G2, originPoint, destinationPoint)


def test_our_opti_shortest_path():
    path2 = lp.get_shortest_path(G2, origin, destination)


