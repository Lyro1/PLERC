import osmnx as ox


def save_path_to_png(graph, path, filename, width=20, height=20):
    ox.plot.plot_graph(graph, path, show=False, filename=filename, fig_height=height, fig_width=width)


def get_html_from_path(graph, path):
    folium_map = ox.plot.plot_route_folium(graph, path)
    return folium_map.get_root().render()

