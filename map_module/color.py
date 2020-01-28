import osmnx
import gps_module.address as gps
import linear_program_module.matrix as lp
osmnx.config(use_cache=True, log_console=True)
osmnx.__version__

def color_way(graph, way, beggin, end):
    """take a graph, the way (must be a list of noods), the origin and the last point
    those have to be at (xy) format"""
    osmnx.plot_graph_route(graph, way, beggin, end)
    return 1



way = [3094515079, 3094515080, 3094515082, 3094515083]

city_name = 'Biars-Sur-Cere'
graph = osmnx.graph_from_place(
    city_name,
    simplify=False,
    retain_all=True,
    network_type='drive',
)

beggin = gps.gps_from_address("27 allee pierre loti biars-sur-cere")
end = gps.gps_from_address("2 rue du stade biars-sur-cere")

fig, ax = color_way(graph, way, beggin, end)