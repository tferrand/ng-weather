import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherHttpService } from 'app/weather-http.service';
import { WeatherLocation } from 'app/weather-location.model';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css']
})
export class ForecastsListComponent {

  forecast: any;

  constructor(
    private weatherHttpService: WeatherHttpService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {

      const weatherLocation: WeatherLocation = {
        countrycode: params['countrycode'],
        zipcode: params['zipcode']
      };

      this.weatherHttpService.getForecast(weatherLocation)
        .subscribe(data => this.forecast = data);
    });
  }
}
