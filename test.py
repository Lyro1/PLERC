import osmnx as ox
import gps_module.address as gps
import linear_program_module.linear_program as lp
import utils.test as test
import geopy
import pytest

ox.config(use_cache=True, log_console=True)
ox.__version__

city_name = input("Quelle ville ?")
if city_name == "" or city_name is None:
    city_name = 'Versailles France'

print("Chargement du graphe de " + city_name)

origin_name = input("Adresse de départ :")
if origin_name == "" or origin_name is None:
    origin_name = "8 Rue des Missionnaires Versailles France"

destination_name = input("Adresse d'arrivée :")
if destination_name == "" or destination_name is None:
    destination_name = "66 Avenue de Paris Versailles France"

print("Getting graph...")
G2 = ox.graph_from_place(
        city_name,
        simplify=False,
        retain_all=True,
        network_type='drive',
    )

print("Got graph.")
while True:
    try:
        origin = gps.gps_from_address(origin_name)
        destination = gps.gps_from_address(destination_name)
        break
    except geopy.exc.GeocoderUnavailable:
        continue

def test_one():
    assert test.compare_shortest_paths(G2,origin,destination)

print("Solving route...")

fig, ax = ox.plot_graph_route(G2, lp.get_shortest_path(G2, origin, destination), fig_height=20, fig_width=20)
