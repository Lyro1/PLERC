import { Injectable } from '@angular/core';
import {AppConfigService} from './app-config.service';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {PathModel} from '../models/path.model';
import {PathDataModel} from '../models/path-data.model';

@Injectable({
  providedIn: 'root'
})

export class PlercService {

  constructor(private appConfigService: AppConfigService,
              private http: HttpClient) {}

  public getPath(trafic: string, town: string, start: string, end: string, algo: string) {
    return this.http.get(
      `${this.appConfigService.config.api}/path/${trafic}/${town}/${start}/${end}/${algo}`,
      {observe: 'response'}
    );
  }

  public getPathData(trafic: string, town: string, start: string, end: string, algo: string): Observable<PathDataModel> {
    return this.http.get<PathDataModel>(` ${this.appConfigService.config.api}/path/${trafic}/${town}/${start}/${end}/${algo}/data`);
  }

}
