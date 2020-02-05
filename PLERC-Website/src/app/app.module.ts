import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MapComponent } from './map/map.component';
import {NotifierModule} from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotifierModule.withConfig({

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
