import osmnx as ox
import gps_module.address as gps
import linear_program_module.linear_program as lp
import geopy
import utils.test as test

ox.config(use_cache=True, log_console=True)
ox.__version__

# Program variables /// TODO: get those variables through arguments)
city_name = 'Versailles'
origin_name = "6 Rue des Missionnaires"
destination_name = "32 Avenue de Paris"

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

# Search and display the shortest path between origin and destination
fig, ax = ox.plot_graph_route(G2, lp.get_shortest_path(G2, origin, destination), fig_height=20, fig_width=20)
