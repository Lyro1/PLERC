import { Injectable } from '@angular/core';
import {AppConfigService} from './app-config.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PlercService {

  constructor(private appConfigService: AppConfigService,
              private http: HttpClient) {}

  public isPointValid(town: string, location: string) {
    return this.http.get(` ${this.appConfigService.config.api}/location/${town}/${location}`);
  }

  public getPath(town: string, start: string, end: string) {
    return this.http.get(` ${this.appConfigService.config.api}/path/${town}/${start}/${end}`);
  }

  public getPathData(town: string, start: string, end: string) {
    return this.http.get(` ${this.appConfigService.config.api}/path/${town}/${start}/${end}/data`);
  }

}
