import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  private isSearching = false;
  private hasFound = false;

  constructor() {}

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
