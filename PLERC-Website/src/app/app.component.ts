import {AfterViewInit, Component} from '@angular/core';
import {PathDataModel} from './models/path-data.model';
import {FakePlercService} from './services/fake-plerc.service';
import {NotifierService} from 'angular-notifier';
import {AppService} from './app.service';
import {HttpErrorResponse} from '@angular/common/http';
import {finalize} from 'rxjs/operators';
import {PathModel} from './models/path.model';

declare var runScripts: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  title = 'PLERC-Website';

  public foundPath = false;
  public searching = false;

  private pathData: PathDataModel;
  private path: PathModel;

  constructor(private api: FakePlercService,
              private notifier: NotifierService,
              private appService: AppService) {
  }

  public search() {
    this.searching = true;
    this.getPath('Versailles', '6 Rue des Missionnaires', '66 Avenue de Paris');
    this.getPathData('Versailles', '6 Rue des Missionnaires', '66 Avenue de Paris');
  }

  public getPath(town: string, start: string, end: string) {
    this.api.getPath(town, start, end)
      .pipe(finalize(() => {this.searching = false; this.foundPath = true; }))
      .subscribe((projection: PathModel) => {
        this.path = projection;
        setTimeout(() => { // wait for DOM rendering
          // runScripts();
        });
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

  ngAfterViewInit() {
    const elem = document.getElementById('map') as HTMLSelectElement;
    elem.innerHTML = this.path.html;
  }

}
