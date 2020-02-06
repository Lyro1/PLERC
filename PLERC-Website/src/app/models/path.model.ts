import {HttpClient} from '@angular/common/http';

export class PathModel {
  html: string;

  constructor() {
    this.html = 'http://localhost:4200/assets/map-test.html';
  }
}
