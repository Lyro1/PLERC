
def build_matrix_dictionary(nodes):
    dictionary = {}
    i = 0
    for node in nodes:
        dictionary[node] = i
        i += 1
    return dictionary

def build_different_matrices(nodes, vertices):
    dict_nodes = build_matrix_dictionary(nodes)
    dict_vertices = {}
    N, V = len(nodes), len(vertices)
    weights = []
    M = [[0 for i in range(V)] for j in range(N)]
    k = 0
    for vertice in vertices:
        i, j, w = dict_nodes[vertice[0]], dict_nodes[vertice[1]], vertice[2]
        dict_vertices[(i, j)] = k
        weights.append(w)
        M[i][k] = 1
        M[j][k] = -1
        k += 1
    return M, weights, dict_nodes, dict_vertices

def build_constraints(i, j, N):
    res = [0 for x in range(N)]
    res[i] = 1
    res[j] = -1
    return res

def get_nodes(G):
    return list(G.nodes())

def get_edges(G):
    edges = list()
    for edge in list(G.edges(data=True)):
        maxspeed = 50
        if "maxspeed" in edge[2]:
            maxspeed = int(edge[2]["maxspeed"])
        length = edge[2]['length']
        edges.append((edge[0], edge[1], length/maxspeed))
    return edges
