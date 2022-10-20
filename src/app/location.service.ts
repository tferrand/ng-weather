import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WeatherLocation } from './weather-location.model';
import { WeatherService } from "./weather.service";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly LOCATIONS_STORAGE_KEY = 'locations';

  private locationsSubject: BehaviorSubject<WeatherLocation[]> = new BehaviorSubject([]);
  locations$: Observable<WeatherLocation[]> = this.locationsSubject.asObservable();

  constructor(
    private weatherService: WeatherService
  ) {
    this.setLocations(this.getLocations());
    for (let loc of this.locationsSubject.value) {
      this.weatherService.addCurrentConditions(loc);
    }
  }

  /**
   * Sets the locations in local storage
   */
  setLocations(locations: WeatherLocation[]): void {
    localStorage.setItem(this.LOCATIONS_STORAGE_KEY, JSON.stringify(locations));
    this.locationsSubject.next([...locations]);
  }

  /**
   * Gets the locations from local storage as an array of string
   */
  getLocations(): WeatherLocation[] {
    const jsonValue = localStorage.getItem(this.LOCATIONS_STORAGE_KEY);
    if (!!jsonValue) {
      return JSON.parse(jsonValue) as WeatherLocation[];
    }
    return [];
  }

  /**
   * Removes one location value from the list stored in local storage
   */
  removeLocation(zipcode: string): void {
    this.setLocations(this.getLocations().filter((value) => value.zipcode !== zipcode));
    this.weatherService.removeCurrentConditions(zipcode);
  }

  /**
   * Adds one location value to the list stored in local storage
   */
  addLocation(location: WeatherLocation): void {
    if (!this.isLocationAlreadyAdded(location.zipcode)) {
      const newWeatherLocationsValue: WeatherLocation[] = [...this.getLocations(), location];
      this.setLocations(newWeatherLocationsValue);
      this.weatherService.addCurrentConditions(location);
    }
  }

  /**
   * Adds one location value to the list stored in local storage and returns observable
   */
  addLocationObs(location: WeatherLocation): Observable<void> {
    if (!this.isLocationAlreadyAdded(location.zipcode)) {
      const newWeatherLocationsValue: WeatherLocation[] = [...this.getLocations(), location];
      this.setLocations(newWeatherLocationsValue);
      return this.weatherService.addCurrentConditionsObs(location).pipe(
        catchError(err => {
          this.removeLocation(location.zipcode);
          return throwError(err);
        })
      );
    }
    return of(void 0);
  }

  /**
   * Returns true if location in parameter is already stored in local storage
   */
  isLocationAlreadyAdded(zipcode: string): boolean {
    return this.getLocations().map(location => location.zipcode).includes(zipcode);
  }

}
