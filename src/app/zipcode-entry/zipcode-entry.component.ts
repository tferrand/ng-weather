import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LocationService } from "../location.service";

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {
  @ViewChild('zipcode') zipcode: ElementRef;

  constructor(
    private locationService: LocationService
  ) { }

  addLocation(): Observable<any> {
    console.log('addLocation with zipcode', this.zipcode.nativeElement.value);

    return this.locationService.addLocationObs(this.zipcode.nativeElement.value).pipe(
      // switchMap(() => throwError(() => new Error('Invalid request'))),
      finalize(() => {
        this.zipcode.nativeElement.value = '';
      })
    );

  }

}
