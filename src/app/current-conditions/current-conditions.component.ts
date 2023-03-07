import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CurrentCondition } from 'app/current-condition.model';
import { LocationService } from 'app/location.service';
import { WeatherHttpService } from 'app/weather-http.service';
import { NEVER, Observable } from 'rxjs';
import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnInit {

  currentConditions$: Observable<CurrentCondition[]> = NEVER;

  constructor(
    private weatherService: WeatherService,
    private weatherHttpService: WeatherHttpService,
    private locationService: LocationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentConditions$ = this.weatherService.currentConditions$;
  }

  removeLocation(zipcode: string) {
    this.locationService.removeLocation(zipcode);
  }

  // Temporary, to reload all the app
  reloadPage() {
    window.location.reload();
  }
}
