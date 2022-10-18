import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { WeatherService } from "./weather.service";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly LOCATIONS_STORAGE_KEY = 'locations';

  private locationsSubject: BehaviorSubject<string[]> = new BehaviorSubject([]);
  locations$: Observable<string[]> = this.locationsSubject.asObservable();

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
  setLocations(zipcodes: string[]): void {
    localStorage.setItem(this.LOCATIONS_STORAGE_KEY, JSON.stringify(zipcodes));
    this.locationsSubject.next([...zipcodes]);
  }

  /**
   * Gets the locations from local storage as an array of string
   */
  getLocations(): string[] {
    const jsonValue = localStorage.getItem(this.LOCATIONS_STORAGE_KEY);
    if (!!jsonValue) {
      return JSON.parse(jsonValue) as string[];
    }
    return [];
  }

  /**
   * Removes one location value from the list stored in local storage
   */
  removeLocation(zipcode: string): void {
    this.setLocations(this.getLocations().filter((value) => value !== zipcode));
    this.weatherService.removeCurrentConditions(zipcode);
  }

  /**
   * Adds one stock value to the list stored in local storage
   */
  addLocation(zipcode: string): void {
    if (!this.isLocationAlreadyAdded(zipcode)) {
      const newLocationsValue: string[] = [...this.getLocations(), zipcode];
      this.setLocations(newLocationsValue);
      this.weatherService.addCurrentConditions(zipcode);
    }
  }

  addLocationObs(zipcode: string): Observable<void> {
    if (!this.isLocationAlreadyAdded(zipcode)) {
      const newLocationsValue: string[] = [...this.getLocations(), zipcode];
      this.setLocations(newLocationsValue);
      return this.weatherService.addCurrentConditionsObs(zipcode);
    }
    return of();
  }

  /**
   * Returns true if location in parameter is already stored in local storage
   */
  isLocationAlreadyAdded(zipcode: string): boolean {
    return this.getLocations().includes(zipcode);
  }

}
