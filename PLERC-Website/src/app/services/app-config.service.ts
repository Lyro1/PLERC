import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface AppConfig {
  api: string;
}

@Injectable({
  providedIn: 'root'
})

export class AppConfigService {

  // tslint:disable-next-line:variable-name
  private _config: AppConfig;

  constructor(private http: HttpClient) {}

  public loadAppConfig() {
    return this.http.get('./assets/runtime-config.json').toPromise()
      .then((config: AppConfig) => {
        this._config = config;
      });
  }

  public get config(): AppConfig {
    return this._config;
  }

}
