import networkx as nx
import osmnx as ox
import requests
from matplotlib import pyplot as plt
import matplotlib.cm as cm
import matplotlib.colors as colors
ox.config(use_cache=True, log_console=True)
ox.__version__

# get a graph for some city
G2 = ox.graph_from_place(
    'Biars-Sur-Cere',
    simplify=False,
    retain_all=True,
    network_type='drive',

)
fig2, ax2 = ox.plot_graph(G2, fig_height=20, fig_width=20)

# get the nearest network node to each point

#good_orig_node = ox.get_nearest_node(G2, (25.070661, 55.137911), method='euclidean')
#dest_node = ox.get_nearest_node(G2, (25.079223, 55.146241), method='euclidean')



# find the route between these nodes then plot it
#route = nx.shortest_path(G2, good_orig_node, dest_node, weight='length')
#fig, ax = ox.plot_graph_route(G2, route, fig_height=20, fig_width=20)
