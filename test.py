import networkx as nx
import osmnx as ox
import gps_module.address as gps
import linear_program_module.matrix as lp
import map_module.color as color
from scipy.optimize import linprog
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

originX, originY = gps.gps_from_address(origin_name)
destinationX, destinationY = gps.gps_from_address(destination_name)

nodes = lp.get_nodes(G2)
vertices = lp.get_edges(G2)
M, w, dict_nodes, dict_vertices = lp.build_different_matrices(nodes, vertices)

origin_node = dict_nodes[ox.get_nearest_node(G2, (originY, originX), method='euclidean')]
destination_node = dict_nodes[ox.get_nearest_node(G2, (destinationY, destinationX), method='euclidean')]

res = lp.build_constraints(origin_node, destination_node, len(nodes))

a = linprog(c=w, A_eq=M, b_eq=res)
path = [i for i in map(round,a.x)]
chemin = []
for j in range(len(path)):
    if path[j] == 1:
        chemin.append(vertices[j])
print("\nChemin :")
print(chemin)
"""
route = nx.shortest_path(G2, origin_node, destination_node, weight='length')
fig, ax = ox.plot_graph_route(G2, route, fig_height=20, fig_width=20)
"""
