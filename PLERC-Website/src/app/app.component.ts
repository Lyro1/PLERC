import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {PathDataModel} from './models/path-data.model';
import {FakePlercService} from './services/fake-plerc.service';
import {NotifierService} from 'angular-notifier';
import {AppService} from './app.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {finalize} from 'rxjs/operators';
import {PathModel} from './models/path.model';
import {SafeResourceUrl} from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import {PlercService} from './services/plerc.service';
import {AppConfigService} from './services/app-config.service';

declare var changeIframeSrc: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'PLERC';

  public start: string;
  public end: string;
  public wrongStart = false;
  public wrongEnd = false;
  public foundPath = false;
  public searching = false;
  public optionsOpen = false;
  public canSimulateTrafic = true;
  public traficCoef = 0;

  public algorithm = 's1';
  public town = 'Biars-sur-Cere';

  private pathData: PathDataModel;
  private url = 'about:blank';

  constructor(private api: PlercService,
              private notifier: NotifierService,
              private appService: AppService,
              private sanitizer: DomSanitizer,
              private http: HttpClient,
              private appConfigService: AppConfigService) {}

  public search() {
    if (this.start == null || this.start === '') {
      this.notifier.notify('error', 'Vous devez spécifier une adresse de départ');
      this.wrongStart = true;
    }
    if (this.end == null || this.end === '') {
      this.notifier.notify('error', 'Vous devez spécifier une adresse d\'arrivée');
      this.wrongEnd = true;
    } else {
      this.optionsOpen = false;
      this.foundPath = false;
      this.wrongStart = false;
      this.wrongEnd = false;
      this.searching = true;
      this.url = 'about:blank';
      changeIframeSrc(this.url);
      this.getPath(this.traficCoef, this.town, this.start, this.end, this.algorithm);
      this.getPathData(this.traficCoef, this.town, this.start, this.end, this.algorithm);
    }
  }

  public getPath(traficCoef: number, town: string, start: string, end: string, algo: string) {
    this.api.getPath(traficCoef, town, start, end, algo)
      .pipe(finalize(() => {this.searching = false; this.foundPath = true; }))
      .subscribe(() => {
      }, (error: HttpErrorResponse) => {
        if (error.status === 200) {
          this.url = this.appConfigService.config.api + '/path/' + traficCoef + '/' + town + '/' + start + '/' + end + '/' + algo;
          changeIframeSrc(this.url);
        } else {
          this.url = 'about:blank';
          this.notifier.notify('error', 'Une erreur est survenue. Réessayez plus tard.');
        }
      });
  }

  public getPathData(traficCoef: number, town: string, start: string, end: string, algo: string) {
    this.api.getPathData(traficCoef, town, start, end, algo)
      .pipe()
      .subscribe((projection: PathDataModel) => {
        this.pathData = projection;
      }, (error: HttpErrorResponse) => {
        this.pathData = null;
        this.notifier.notify('error', 'Une erreur est survenue. Réessayez plus tard.');
      });
  }

  private displayTime(time: number) {
    const hour = Math.floor(time / 3600);
    const minutes = Math.floor(((time / 3600) % 1) * 60);
    let res = '';
    if (hour > 0) {
      res += hour + 'h';
    }
    return res + minutes + 'min';
  }

  private displayLength(length: number) {
    if (length >= 1000) {
      return ((length / 1000).toString() + ' km');
    } else {
      return (length.toString() + ' m');
    }
  }

  private displaySpeed(speed: number) {
    return (speed).toFixed();
  }

  private switchOptionsDiv() {
    this.optionsOpen = !this.optionsOpen;
  }

  onChange(value: any) {
    console.log(value);
    if (value === 'djikstra') {
      this.canSimulateTrafic = false;
    } else {
      this.canSimulateTrafic = true;
    }
  }
}
