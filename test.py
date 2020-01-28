import networkx as nx
import osmnx as ox
import gps_module.address as gps
import linear_program_module.matrix as lp
import map_module.color as color
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

print((originX, originY))
print((destinationX, destinationY))

print("Testing matrix...")
print(lp.build_matrix_dictionary(G2.nodes))
print(G2.nodes)

origin_node = ox.get_nearest_node(G2, (originY, originX), method='euclidean')
destination_node = ox.get_nearest_node(G2, (destinationY, destinationX), method='euclidean')

way = [3094515079, 3094515080, 3094515082, 3094515083]

city_name = 'Biars-Sur-Cere'

fig, ax = color.color_way(G2, way, orig_dest_points=[(originY, originX), (destinationY, destinationX)])

#route = nx.shortest_path(G2, origin_node, destination_node, weight='length')
#fig, ax = ox.plot_graph_route(G2, route, fig_height=20, fig_width=20)
