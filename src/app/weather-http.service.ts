import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { WeatherLocation } from './weather-location.model';
import { CurrentCondition } from './current-condition.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherHttpService {

  static URL = 'https://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Request to the weather API for the zipcode
   */
  getWeather(location: WeatherLocation): Observable<CurrentCondition> {
    return this.http.get<CurrentCondition>(`${WeatherHttpService.URL}/weather?zip=${location.zipcode},${location.countrycode.toLocaleLowerCase()}&units=imperial&APPID=${WeatherHttpService.APPID}`).pipe(
      map(data => {
        const mapped: CurrentCondition = { location, data: data, date: new Date() };
        return mapped;
      })
    )
  }

  /**
   * Request to the forecast API for the zipcode
   */
  getForecast(location: WeatherLocation): Observable<any> {
    return this.http.get(`${WeatherHttpService.URL}/forecast/daily?zip=${location.zipcode},${location.countrycode.toLocaleLowerCase()}&units=imperial&cnt=5&APPID=${WeatherHttpService.APPID}`);
  }

  getWeatherIcon(id) {
    if (id >= 200 && id <= 232)
      return WeatherHttpService.ICON_URL + "art_storm.png";
    else if (id >= 501 && id <= 511)
      return WeatherHttpService.ICON_URL + "art_rain.png";
    else if (id === 500 || (id >= 520 && id <= 531))
      return WeatherHttpService.ICON_URL + "art_light_rain.png";
    else if (id >= 600 && id <= 622)
      return WeatherHttpService.ICON_URL + "art_snow.png";
    else if (id >= 801 && id <= 804)
      return WeatherHttpService.ICON_URL + "art_clouds.png";
    else if (id === 741 || id === 761)
      return WeatherHttpService.ICON_URL + "art_fog.png";
    else
      return WeatherHttpService.ICON_URL + "art_clear.png";
  }

}
