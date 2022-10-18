import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';

import { WeatherHttpService } from './weather-http.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private currentConditionsSubject: BehaviorSubject<any[]> = new BehaviorSubject([]);
  currentConditions$: Observable<any[]> = this.currentConditionsSubject.asObservable();

  constructor(
    private weatherHttpService: WeatherHttpService
  ) {
  }

  /**
   * Sets the currentConditions
   */
  setCurrentConditions(currentConditions: any[]): void {
    this.currentConditionsSubject.next([...currentConditions]);
  }

  /**
   * Gets the currentConditions
   */
  getCurrentConditions(): any[] {
    return this.currentConditionsSubject.value;
  }

  /**
   * Adds the current conditions for the zipcode
   */
  addCurrentConditions(zipcode: string): void {
    this.weatherHttpService.getWeather(zipcode).subscribe(
      data => this.currentConditionsSubject.next([...this.getCurrentConditions(), data])
    );
  }

  /**
   * Removes the current conditions for the zipcode
   */
  removeCurrentConditions(zipcode: string): void {
    this.setCurrentConditions(this.getCurrentConditions().filter((value) => value.zip !== zipcode));
  }

  /**
   * Updates current conditions from API for all stored locations
   */
  updateCurrentConditionsFromApi(): void {
    combineLatest(
      this.getCurrentConditions()
      .map(location => this.weatherHttpService.getWeather(location.zip))
    ).subscribe(
      updatedCurrentConditions => this.setCurrentConditions(updatedCurrentConditions)
    );
  }

}
