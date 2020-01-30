import linear_program_module.linear_program as lp
import networkx as nx

def compare_shortest_paths(g,origin,destination):
    path_1 = lp.get_shortest_path(g,origin,destination)
    path_2 = nx.shortest_path(g,origin,destination)
    return path_1 == path_2
