import { Injectable } from '@angular/core';
import {AppConfigService} from './app-config.service';
import {HttpClient} from '@angular/common/http';
import {PathModel} from '../models/path.model';
import {PathDataModel} from '../models/path-data.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakePlercService {

  constructor(private appConfigService: AppConfigService,
              private http: HttpClient) {}

  public isPointValid(town: string, location: string) {
    return true;
  }

  public getPath(town: string, start: string, end: string): Observable<PathModel> {
    return of(new PathModel('http://localhost:4200/assets/map-test.html'));
  }

  public getPathData(town: string, start: string, end: string): Observable<PathDataModel> {
    return of(new PathDataModel(2360, 48.83728));
  }
}
