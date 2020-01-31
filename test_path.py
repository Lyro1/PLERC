import osmnx as ox
import gps_module.address as gps
import linear_program_module.linear_program as lp
import utils.test as test
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


def test_nx_opti_shortest_path():
    fig, ax = ox.plot_graph_route(G2_opti, test.get_nx_shortest_path(G2_opti, origin, destination), fig_height=20, fig_width=20)


def test_nx_shortest_path():
    fig, ax = ox.plot_graph_route(G2, test.get_nx_shortest_path(G2, origin, destination), fig_height=20, fig_width=20)


def test_our_opti_shortest_path():
    fig, ax = ox.plot_graph_route(G2_opti, lp.get_shortest_path(G2_opti, origin, destination), fig_height=20, fig_width=20)


def test_our_shortest_path():
    fig, ax = ox.plot_graph_route(G2, lp.get_shortest_path(G2, origin, destination), fig_height=20, fig_width=20)


def test_give_same_path():
    assert test.compare_shortest_paths(G2,origin,destination)


