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
            speed_total += 20
        count += 1
    return speed_total / count #moyenne en km/h


def time_way(length, speed):
    if speed == 0:
        raise Exception('Speed can\'t be null')
    speed = speed/3.6 #convert m/S
    print("en m/s")
    print(speed)
    return length/(speed) #return des secondes

def affiche_time(time):
    tab =[]
    tab.append(time/360)
    print(int(time/360))
    tab.append(time/60)
    print(int(time/60))
    return tab


def will_arrive(waiting_time):
    t = time.localtime()
    #print(t)
   # print(time.asctime(t))
    return

def get_path_stats(path):
    length = length_way(path)
    speed = speed_way(path)
    return length, speed, time_way(length/1000, speed)

