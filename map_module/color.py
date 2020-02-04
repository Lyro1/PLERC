import osmnx as ox


def color_way(graph, way):
    """take a graph, the path (must be a list of nodes), and a list of relevant
    points as tuple (lat, lon)"""
    ox.plot_graph_route(graph, way)


def length_way(list_of_edges):
    length_total = 0
    for edges in list_of_edges:
        if "length" in edges[2]:
            length_total += int(edges[2]["length"])
        else:
            length_total += 20
    return length_total


def speed_way(list_of_edges):
    speed_total = 0
    count = 0
    for edges in list_of_edges:
        if "maxspeed" in edges[2]:
            speed_total += int(edges[2]["maxspeed"])
        else:
            speed_total += 50
        count += 1
    return speed_total / count


def time_way(length, speed):
    if speed == 0:
        print("error")
        return -1
    if length == 0:
        print("Vous etes arrivé")
    return length/speed

