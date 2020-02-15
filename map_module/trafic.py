import linear_program_module.matrix as matrix
import random
import osmnx as ox
import networkx as nx

def getRandomPath(graph):
    nodes = matrix.get_nodes(graph)
    startIndex = random.randrange(0, len(nodes))
    endIndex = random.randrange(0, len(nodes))

    path = None
    noPathExist = True

    while noPathExist:
        try:
            path = nx.shortest_path(graph, nodes[startIndex][0], nodes[endIndex][0])
        except nx.exception.NetworkXNoPath:
            endIndex = random.randrange(0, len(nodes))
        noPathExist = False

    return path

def getRandomPaths(graph, n=200):
    paths=[]
    for i in range(0, n):
        path = getRandomPath(graph)
        if path is not None:
            paths.append(path)
    paths.pop(0)
    return paths

def generateFakeDrivers(paths, n=1000, repartition=4):
    drivers_per_paths = []
    for i in range(len(paths)):
        drivers = random.randrange(0, n // repartition)
        drivers_per_paths.append(drivers)
        n -= drivers
    return drivers_per_paths

def colorEdgesInRealTime(graph, edges_weight, edges_weight_realtime):
    lines = []
    i = 0
    for edge in list(graph.edges(data=True)):
        edge_weight = edges_weight[i][2]
        edge_weight_realtime = edges_weight_realtime[i][2]
        edge_data = edge[2]
        i += 1
        if edge_weight_realtime / edge_weight > 1.5:
            color = "orange"
            if edge_weight_realtime / edge_weight > 2:
                color = "red"
            if "geometry" in edge_data:
                lines.append(ox.plot.make_folium_polyline(edge_data, color, 4, 0.4))
    return lines

def getColoredLines(graph, nb_path=200, nb_drivers=1000):
    # paths = getRandomPaths(graph, nb_path)
    # drivers = generateFakeDrivers(paths, nb_drivers)
    edges_weight = matrix.get_edges(graph)
    edges_weight_realtime = matrix.get_edges_realtime_2(graph, nb_drivers)
    lines = colorEdgesInRealTime(graph, edges_weight, edges_weight_realtime)
    return lines
