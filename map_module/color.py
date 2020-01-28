import osmnx as ox

def color_way(graph, way, beggin, end):
    """take a graph, the way (must be a list of nodes), the origin and the last point
    those have to be at (x,y) format"""
    ox.plot_graph_route(graph, way, beggin, end)
