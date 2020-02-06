
export class PathDataModel {
  public length: number;
  public speed: number;
  public time: number;

  constructor(length: number, speed: number) {
    this.length = length;
    this.speed = speed;
    this.time = (this.length / 1000) / this.speed;
  }

  public getDistanceText() {
    if (this.length >= 1000) {
      return ((this.length / 1000).toString() + ' km');
    } else {
      return (this.length.toString() + ' m');
    }
  }

  public getRoundedSpeed() {
    return (this.speed).toFixed();
  }

}
