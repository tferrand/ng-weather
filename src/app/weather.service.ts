import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, interval, Observable, of, Subscription } from 'rxjs';
import { delay, switchMap, tap } from 'rxjs/operators';
import { CurrentCondition } from './current-condition.model';

import { WeatherHttpService } from './weather-http.service';
import { WeatherLocation } from './weather-location.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnDestroy {

  private currentConditionsSubject: BehaviorSubject<CurrentCondition[]> = new BehaviorSubject([]);
  currentConditions$: Observable<CurrentCondition[]> = this.currentConditionsSubject.asObservable();

  private subscriptions: Subscription = new Subscription();

  constructor(
    private weatherHttpService: WeatherHttpService
  ) {
    // Update weather value every 10 seconds
    this.subscriptions.add(
      interval(10000).pipe(
        switchMap(() => this.updateCurrentConditionsFromApi())
      ).subscribe(
        updatedCurrentConditions => this.setCurrentConditions(updatedCurrentConditions)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * Sets the currentConditions
   */
  setCurrentConditions(currentConditions: CurrentCondition[]): void {
    this.currentConditionsSubject.next([...currentConditions]);
  }

  /**
   * Gets the currentConditions
   */
  getCurrentConditions(): CurrentCondition[] {
    return this.currentConditionsSubject.value;
  }

  /**
   * Adds the current conditions for the zipcode
   */
  addCurrentConditions(location: WeatherLocation): void {
    this.weatherHttpService.getWeather(location).subscribe(
      data => this.currentConditionsSubject.next([...this.getCurrentConditions(), data])
    );
  }

  /**
   * Adds the current conditions for the zipcode and returns observable when done
   */
  addCurrentConditionsObs(location: WeatherLocation): Observable<void> {
    return this.weatherHttpService.getWeather(location).pipe(
      delay(1000), // simulate long response to view the state change on the "state-button" component
      tap(data => this.currentConditionsSubject.next([...this.getCurrentConditions(), data])),
      switchMap(() => of(void 0))
    );
  }

  /**
   * Removes the current conditions for the zipcode
   */
  removeCurrentConditions(zipcode: string): void {
    this.setCurrentConditions(this.getCurrentConditions().filter((value) => value.location.zipcode !== zipcode));
  }

  /**
   * Updates current conditions from API for all stored locations
   */
  updateCurrentConditionsFromApi(): Observable<CurrentCondition[]> {
    return combineLatest(
      this.getCurrentConditions()
        .map(currentCondition => this.weatherHttpService.getWeather(currentCondition.location))
    );
  }

}
