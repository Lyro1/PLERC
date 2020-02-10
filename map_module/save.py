import osmnx as ox
import folium
import map_module.trafic as trafic


def save_path_to_png(graph, path, filename, width=20, height=20):
    ox.plot.plot_graph(graph, path, show=False, filename=filename, fig_height=height, fig_width=width)


def get_html_from_path(graph, path):
    folium_map = ox.plot.plot_route_folium(graph, path)
    lines = trafic.getColoredLines(graph, 20, 100)
    for line in lines:
        folium_map.add_children(line)
    return folium_map.get_root().render()

