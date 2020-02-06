import {AfterViewInit, Component} from '@angular/core';
import {PathDataModel} from './models/path-data.model';
import {FakePlercService} from './services/fake-plerc.service';
import {NotifierService} from 'angular-notifier';
import {AppService} from './app.service';
import {HttpErrorResponse} from '@angular/common/http';
import {finalize} from 'rxjs/operators';
import {PathModel} from './models/path.model';
import {SafeResourceUrl} from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import {PlercService} from './services/plerc.service';

declare var runScripts: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  title = 'PLERC-Website';

  public start: string;
  public end: string;
  public foundPath = false;
  public searching = false;

  private sanitizer: DomSanitizer;
  private pathData: PathDataModel;
  private path: PathModel;

  constructor(private api: PlercService,
              private notifier: NotifierService,
              private appService: AppService,
              sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  public search() {
    this.searching = true;
    this.getPath('Versailles', this.start, this.end);
    // this.getPathData('Versailles', this.start, this.end);
  }

  public getPath(town: string, start: string, end: string) {
    this.api.getPath(town, start, end)
      .pipe(finalize(() => {this.searching = false; this.foundPath = true; }))
      .subscribe((projection: PathModel) => {
        this.path = projection;
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

  public cleanURL(oldURL: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
  }

  ngAfterViewInit() {
    const elem = document.getElementById('map') as HTMLSelectElement;
    elem.innerHTML = this.path.html;
  }

}
