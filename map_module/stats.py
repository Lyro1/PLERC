import linear_program_module.matrix as matrix
import time

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
        raise Exception('Speed can\'t be null')
    return speed/length


def get_path_stats(path):
    length = length_way(path)
    speed = speed_way(path)
    return length, speed, time_way(length/1000, speed)


def will_arrive(waiting_time):
    actual_time = time.localtime(time.time())
    return actual_time.tm_min + waiting_time