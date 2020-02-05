import { Component, OnInit } from '@angular/core';
import { FakePlercService } from '../services/fake-plerc.service';
import { PathDataModel } from '../models/path-data.model';
import {finalize} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {NotifierService} from 'angular-notifier';
import {AppService} from '../app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private pathData: PathDataModel;

  constructor(private api: FakePlercService,
              private notifier: NotifierService,
              private appService: AppService) { }

  ngOnInit() {
  }

  public getPathData() {
    this.api.getPathData('Versailles', '6 Rue des Missionnaires', '24 Avenue de Paris')
      .pipe()
      .subscribe((projection: PathDataModel) => {
        this.pathData = projection;
      }, (error: HttpErrorResponse) => {
        this.pathData = null;
        this.notifier.notify('error', 'Une erreur est survenue. Réessayez plus tard.');
      });
  }

}
