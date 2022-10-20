import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AutocompleteOption } from 'app/autocomplete-option.model';
import { WeatherLocation } from 'app/weather-location.model';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { LocationService } from "../location.service";

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {
  @ViewChild('zipcode') zipcode: ElementRef;

  form = this.fb.group({
    countrycode: ['', [Validators.required]],
    zipcode: ['', [Validators.required]]
  });

  countriesOptions$: Observable<AutocompleteOption[]> = this.http.get<{ name: string, code: string }[]>('/assets/countries.json')
    .pipe(
      map(data => data.map(country => {
        const autocompleteOption: AutocompleteOption = {
          label: `${country.name} (${country.code})`,
          value: country.code
        }
        return autocompleteOption;
      }))
    );

  constructor(
    private locationService: LocationService,
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  addLocation(): Observable<void> {
    const weatherLocation: WeatherLocation = {
      countrycode: this.form.value.countrycode,
      zipcode: this.form.value.zipcode
    };

    return this.locationService.addLocationObs(weatherLocation)
      .pipe(
        finalize(() => {
          this.form.reset();
        })
      );

  }

}
