def build_matrix_dictionary(nodes):
    dictionary = {}
    i = 0
    for node in nodes:
        dictionary[node[0]] = i
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


def _represents_int(s):
    try:
        int(s)
        return True
    except ValueError:
        return False


def get_nodes(G):
    return list(G.nodes(data=True))


def get_edges(G):
    edges = list()
    for edge in list(G.edges(data=True)):
        maxspeed = 50
        if "maxspeed" in edge[2]:
            if type(edge[2]["maxspeed"]) == type(list()):
                sum = 0
                for speed in edge[2]["maxspeed"]:
                    if _represents_int(speed):
                        sum += int(speed)
                maxspeed = sum // len(edge[2]["maxspeed"])
            else:
                maxspeed = int(edge[2]["maxspeed"])
        length = edge[2]['length']
        edges.append((edge[0], edge[1], length / maxspeed))
    return edges


def get_path(lp, vertices):
    path = [i for i in map(round, lp.x)]
    chemin = []
    for j in range(len(path)):
        if path[j] == 1:
            chemin.append(vertices[j])
    return chemin


def get_detailled_path(path, edges):
    detailled_path = []
    source = None
    for node in path:
        if source is None:
            source = node
        else:
            for edge in edges:
                if edge[0] == source and edge[1] == node:
                    detailled_path.append(edge)
            source = node
    return detailled_path


def sort_path(path, source, destination):
    res = []
    for i in range(len(path)):
        for j in range(len(path)):
            if path[j][0] == source:
                res.append(path[j][0])
                source = path[j][1]
    res.append(destination)
    return res
