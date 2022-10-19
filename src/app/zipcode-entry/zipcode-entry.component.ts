import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AutocompleteOption } from 'app/autocomplete-option.model';
import { Observable, of } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { LocationService } from "../location.service";

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {
  @ViewChild('zipcode') zipcode: ElementRef;

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
    private http: HttpClient
  ) { }

  addLocation(): Observable<any> {
    console.log('addLocation with zipcode', this.zipcode.nativeElement.value);

    return this.locationService.addLocationObs(this.zipcode.nativeElement.value).pipe(
      finalize(() => {
        this.zipcode.nativeElement.value = '';
      })
    );

  }

}
