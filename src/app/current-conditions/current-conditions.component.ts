import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
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

  currentConditions$: Observable<any[]> = NEVER;

  constructor(
    private weatherService: WeatherService,
    private weatherHttpService: WeatherHttpService,
    private locationService: LocationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentConditions$ = this.weatherService.currentConditions$;
  }

  showForecast(zipcode: string) {
    this.router.navigate(['/forecast', zipcode])
  }

  removeLocation(zipcode: string) {
    this.locationService.removeLocation(zipcode);
  }
}
