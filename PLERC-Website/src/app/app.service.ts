import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from './services/app-config.service';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  private isSearching = false;
  private hasFound = false;

  constructor(appConfig: AppConfigService) {
    appConfig.loadAppConfig();
  }

  public getSearchingStatus() {
    return this.isSearching;
  }

  public getFoundStatus() {
    return this.hasFound;
  }

  public changeSearching() {
    this.isSearching = !this.isSearching;
  }

  public changeHasFound() {
    this.hasFound = !this.hasFound;
  }

}
