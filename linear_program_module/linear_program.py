from scipy.optimize import linprog
from .matrix import *
import osmnx as ox
import map_module.trafic as trafic


def get_shortest_path(graph, origin, destination):
    nodes = get_nodes(graph)
    vertices = get_edges(graph)
    M, w, dict_nodes, dict_vertices = build_different_matrices(nodes, vertices)
    origin_node = dict_nodes[ox.get_nearest_node(graph, (origin[0], origin[1]), method='euclidean')]
    destination_node = dict_nodes[ox.get_nearest_node(graph, (destination[0], destination[1]), method='euclidean')]
    res = build_constraints(origin_node, destination_node, len(nodes))
    #M, res, status, message = _remove_redundancy(M, res)
    a = linprog(c=w, A_eq=M, b_eq=res)
    chemin = get_path(a, vertices)
    return sort_path(chemin, nodes[origin_node][0], nodes[destination_node][0])


def get_shortest_path_realtime(graph, origin, destination, nb_paths=20, nb_drivers=100, repartition=4):
    nodes = get_nodes(graph)
    paths = trafic.getRandomPaths(graph, nb_paths)
    drivers = trafic.generateFakeDrivers(paths, nb_drivers, repartition)
    vertices = get_edges(graph)
    vertices_realtime = get_edges_realtime(graph, drivers, paths)
    M, w, dict_nodes, dict_vertices = build_different_matrices(nodes, vertices_realtime)
    origin_node = dict_nodes[ox.get_nearest_node(graph, (origin[0], origin[1]), method='euclidean')]
    destination_node = dict_nodes[ox.get_nearest_node(graph, (destination[0], destination[1]), method='euclidean')]
    res = build_constraints(origin_node, destination_node, len(nodes))
    #M, res, status, message = _remove_redundancy(M, res)
    a = linprog(c=w, A_eq=M, b_eq=res)
    chemin = get_path(a, vertices)
    return sort_path(chemin, nodes[origin_node][0], nodes[destination_node][0]), vertices, vertices_realtime

