import osmnx as ox

def color_way(graph, way, origin, destination):
    """take a graph, the path (must be a list of nodes), and a list of relevant
    points as tuple (lat, lon)"""
    ox.plot_graph_route(graph, way)
