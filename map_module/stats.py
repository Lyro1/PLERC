from datetime import datetime
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
            speed_total += int(edges[2]["maxspeed"]) * 0.6
        else:
            speed_total += 20
        count += 1
    return speed_total / count


def time_way(length, speed, traficCoef):
    if speed == 0:
        raise Exception('Speed can\'t be null')
    time = length/(speed/3600)
    return time * (1 + traficCoef/10)


def affiche_time(time):
    tab =[]
    datetime.now()
    tab.append(time/360)
    print(int(time/360))
    tab.append(time/60)
    print(int(time/60))
    return tab


def will_arrive(duration):
    now = time.time()
    print("now = " + str(now))
    print("duration = " + str(duration))
    arrive = now + duration
    res = datetime.fromtimestamp(arrive)
    minutes_str = ""
    if res.minute < 10:
        minutes_str = "0"
    return str(res.hour) + "h" + minutes_str + str(res.minute)


def get_path_stats(path, traficCoef):
    length = length_way(path)
    speed = speed_way(path)
    return length, speed, time_way(length/1000, speed, traficCoef)

