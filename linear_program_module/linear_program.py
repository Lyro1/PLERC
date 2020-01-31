from scipy.optimize import linprog
from .matrix import *
from ._remove_redundancy import _remove_redundancy
import osmnx as ox

def get_shortest_path(graph, origin, destination):
    nodes = get_nodes(graph)
    vertices = get_edges(graph)
    print("Getting matrixes...")
    M, w, dict_nodes, dict_vertices = build_different_matrices(nodes, vertices)
    print("Got matrixes.")
    origin_node = dict_nodes[ox.get_nearest_node(graph, (origin[1], origin[0]), method='euclidean')]
    destination_node = dict_nodes[ox.get_nearest_node(graph, (destination[1], destination[0]), method='euclidean')]
    res = build_constraints(origin_node, destination_node, len(nodes))
    print("Removing redundancy...")
    #M, w, status, message = _remove_redundancy(M, w)
    #print(message)
    print("Solving linear program...")
    a = linprog(c=w, A_eq=M, b_eq=res)
    chemin = get_path(a, vertices)
    chemin = sort_path(chemin, nodes[origin_node][0], nodes[destination_node][0])
    return chemin
