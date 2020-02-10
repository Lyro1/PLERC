import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from './services/app-config.service';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(appConfig: AppConfigService) {
    appConfig.loadAppConfig();
  }

}
