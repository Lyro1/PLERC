import osmnx

def color_way(graph, way, beggin, end):
    """take a graph, the way (must be a list of noods), the origin and the last point
    those have to be at (xy) format"""
    osmnx.plot_graph_route(graph, way, beggin, end)
    return 1



way = [3094515079, 3094515080, 3094515082, 3094515083]

city_name = 'Biars-Sur-Cere'
G2 = ox.graph_from_place(
    city_name,
    simplify=False,
    retain_all=True,
    network_type='drive',
)

