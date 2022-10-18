import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherHttpService } from 'app/weather-http.service';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css']
})
export class ForecastsListComponent {

  zipcode: string;
  forecast: any;

  constructor(
    private weatherHttpService: WeatherHttpService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      this.weatherHttpService.getForecast(this.zipcode)
        .subscribe(data => this.forecast = data);
    });
  }
}
