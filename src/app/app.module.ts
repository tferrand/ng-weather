import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ServiceWorkerModule } from '@angular/service-worker';
import projectJson from '../../angular.json';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { CurrentConditionsComponent } from './current-conditions/current-conditions.component';
import { ForecastsListComponent } from './forecasts-list/forecasts-list.component';
import { HighlightPipe } from './highlight.pipe';
import { InputAutocompleteComponent } from './input-autocomplete/input-autocomplete.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StateButtonComponent } from './state-button/state-button.component';
import { ZipcodeEntryComponent } from './zipcode-entry/zipcode-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeEntryComponent,
    ForecastsListComponent,
    CurrentConditionsComponent,
    MainPageComponent,
    StateButtonComponent,
    InputAutocompleteComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    routing,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF, useValue: environment.production
        ? projectJson.projects['ng-weather'].architect.build.configurations.production.baseHref
        : projectJson.projects['ng-weather'].architect.build.configurations.development.baseHref
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
