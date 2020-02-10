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

declare var changeIframeSrc: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'PLERC-Website';

  public start: string;
  public end: string;
  public wrongStart = false;
  public wrongEnd = false;
  public foundPath = false;
  public searching = false;

  private path: PathModel;
  private pathData: PathDataModel;
  private url = 'about:blank';

  constructor(private api: PlercService,
              private notifier: NotifierService,
              private appService: AppService,
              private sanitizer: DomSanitizer,
              private http: HttpClient) {}

  public search() {
    if (this.start == null || this.start === '') {
      this.notifier.notify('error', 'Vous devez spécifier une adresse de départ');
      this.wrongStart = true;
    }
    if (this.end == null || this.end === '') {
      this.notifier.notify('error', 'Vous devez spécifier une adresse d\'arrivée');
      this.wrongEnd = true;
    } else {
      this.wrongStart = false;
      this.wrongEnd = false;
      this.searching = true;
      this.getPath('Biars sur Cere', this.start, this.end);
    }
  }

  public getPath(town: string, start: string, end: string) {
    this.api.getPath(town, start, end)
      .pipe()
      .subscribe((projection: PathModel) => {
        this.path = projection;
        this.url = this.path.url;
        this.searching = false;
        this.foundPath = true;
        changeIframeSrc(this.url);
      }, (error: HttpErrorResponse) => {
        this.path = null;
        this.notifier.notify('error', 'Une erreur est survenue. Réessayez plus tard.');
      });
  }

  public getPathData(town: string, start: string, end: string) {
    this.api.getPathData(town, start, end)
      .pipe(finalize(() => {this.searching = false; this.foundPath = true; }))
      .subscribe((projection: PathDataModel) => {
        this.pathData = projection;
      }, (error: HttpErrorResponse) => {
        this.pathData = null;
        this.notifier.notify('error', 'Une erreur est survenue. Réessayez plus tard.');
      });
  }
}
