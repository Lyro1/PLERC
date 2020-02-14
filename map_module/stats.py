import linear_program_module.matrix as matrix
import time
from time import strftime
from datetime import datetime


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
            speed_total += int(edges[2]["maxspeed"]) * 0.6
        else:
            speed_total += 20
        count += 1
    return speed_total / count


def time_way(length, speed, weights_realtime=None):
    if speed == 0:
        raise Exception('Speed can\'t be null')
    time = length/(speed/3.6)
    if weights_realtime is not None:
        time *= 1.6
    return time


def affiche_time(time):
    tab =[]
    datetime.now()
    tab.append(time/360)
    print(int(time/360))
    tab.append(time/60)
    print(int(time/60))
    return tab


def will_arrive(time):
    now = datetime.now()
    hour = int(now.strftime("%H")) + int(time)
    minutes = int((time % 1) * 100) + int(now.strftime("%M"))
    print("minutes = " + str(minutes))
    if minutes >= 60:
        hour += 1
        minutes -= 60
    print("minutes = " + str(minutes))
    print(str(hour) + "h" + str(minutes))
    return str(hour) + "h" + str(minutes)


def get_path_stats(path, weights_realtime=None):
    length = length_way(path)
    speed = speed_way(path)
    return length, speed, time_way(length/1000, speed, weights_realtime)

