
export class PathDataModel {
  length: number;
  speed: number;
  time: number;

  constructor(length: number, speed: number) {
    this.length = length;
    this.speed = speed;
    this.time = (this.length / 1000) / this.speed;
  }

  public getRoundedSpeed() {
    return (this.speed).toFixed();
  }

}
