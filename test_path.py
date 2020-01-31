import osmnx as ox
import gps_module.address as gps
import linear_program_module.linear_program as lp
import utils.test as test
import geopy
import pytest

ox.config(use_cache=True, log_console=True)
ox.__version__

city_name = 'versailles'

origin_name = "8 Rue des Missionnaires versailles"

destination_name = "66 boulevard du roi versailles"

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

def test_one():
    assert test.compare_shortest_paths(G2,origin,destination)


