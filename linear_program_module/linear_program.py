from scipy.optimize import linprog
from .matrix import *
from ._remove_redundancy import _remove_redundancy
import osmnx as ox


def get_shortest_path(graph, origin, destination):
    nodes = get_nodes(graph)
    vertices = get_edges(graph)
    M, w, dict_nodes, dict_vertices = build_different_matrices(nodes, vertices)
    origin_node = dict_nodes[ox.get_nearest_node(graph, (origin[1], origin[0]), method='euclidean')]
    destination_node = dict_nodes[ox.get_nearest_node(graph, (destination[1], destination[0]), method='euclidean')]
    res = build_constraints(origin_node, destination_node, len(nodes))
    #M, res, status, message = _remove_redundancy(M, res)
    a = linprog(c=w, A_eq=M, b_eq=res)
    chemin = get_path(a, vertices)
    return sort_path(chemin, nodes[origin_node][0], nodes[destination_node][0])
