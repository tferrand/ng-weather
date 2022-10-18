import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LocationService } from 'app/location.service';
import { WeatherHttpService } from 'app/weather-http.service';
import { interval, NEVER, Observable, Subscription } from 'rxjs';
import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnInit, OnDestroy {

  currentConditions$: Observable<any[]> = NEVER;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private weatherService: WeatherService,
    private weatherHttpService: WeatherHttpService,
    private locationService: LocationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentConditions$ = this.weatherService.currentConditions$;

    // Update weather value every 30 seconds
    this.subscriptions.add(
      interval(30000).subscribe(
        () => this.weatherService.updateCurrentConditionsFromApi()
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  showForecast(zipcode: string) {
    this.router.navigate(['/forecast', zipcode])
  }

  removeLocation(zipcode: string) {
    this.locationService.removeLocation(zipcode);
  }
}
