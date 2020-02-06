import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NotifierModule} from 'angular-notifier';
import {HttpClientModule} from '@angular/common/http';
import {EscapeHtmlPipe} from './pipes/keep-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EscapeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotifierModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {



}
