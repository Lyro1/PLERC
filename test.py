import osmnx as ox
import gps_module.address as gps
import linear_program_module.linear_program as lp

ox.config(use_cache=True, log_console=True)
ox.__version__

city_name = input("Quelle ville ?")
if city_name == "" or city_name is None:
    city_name = 'Biars-Sur-Cere'

print("Chargement du graphe de " + city_name)

origin_name = input("Adresse de départ :")
if origin_name == "" or origin_name is None:
    origin_name = "27 allee pierre loti biars-sur-cere"

destination_name = input("Adresse d'arrivée :")
if destination_name == "" or destination_name is None:
    destination_name = "2 rue du stade biars-sur-cere"

# get a graph for some city
G2 = ox.graph_from_place(
    city_name,
    simplify=False,
    retain_all=True,
    network_type='drive',
)

origin = gps.gps_from_address(origin_name)
destination = gps.gps_from_address(destination_name)
chemin=lp.get_shortest_path(G2, origin, destination)


fig, ax = ox.plot_graph_route(G2,chemin, fig_height=20, fig_width=20)

