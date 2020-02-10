
export class PathDataModel {
  public time: number;
  public length: number;
  public speed: number;
  public departure: string;
  public arrival: string;

  constructor(time: number, length: number, speed: number, departure: string, arrival: string) {
    this.time = time;
    this.length = length;
    this.speed = speed;
    this.departure = departure;
    this.arrival = arrival;
  }

}
