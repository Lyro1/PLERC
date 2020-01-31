import linear_program_module.linear_program as lp
import networkx as nx
import osmnx as ox
import linear_program_module.matrix as matrix


def get_nx_shortest_path(g,origin,destination):
    nodes = matrix.get_nodes(g)
    vertices = matrix.get_edges(g)
    M, w, dict_nodes, dict_vertices = matrix.build_different_matrices(nodes, vertices)
    origin_node = dict_nodes[ox.get_nearest_node(g, (origin[1], origin[0]), method='euclidean')]
    destination_node = dict_nodes[ox.get_nearest_node(g, (destination[1], destination[0]), method='euclidean')]
    path_2 = nx.shortest_path(g,nodes[origin_node][0],nodes[destination_node][0])
    return path_2


def compare_shortest_paths(g,origin,destination):
    nodes = matrix.get_nodes(g)
    vertices = matrix.get_edges(g)
    M, w, dict_nodes, dict_vertices = matrix.build_different_matrices(nodes, vertices)
    origin_node = dict_nodes[ox.get_nearest_node(g, (origin[1], origin[0]), method='euclidean')]
    destination_node = dict_nodes[ox.get_nearest_node(g, (destination[1], destination[0]), method='euclidean')]
    path_1 = lp.get_shortest_path(g,origin,destination)
    path_2 = nx.shortest_path(g,nodes[origin_node][0],nodes[destination_node][0])
    return path_1 == path_2

