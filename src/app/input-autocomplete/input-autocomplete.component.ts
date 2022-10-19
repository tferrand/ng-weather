import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AutocompleteOption } from 'app/autocomplete-option.model';
import { Observable } from 'rxjs';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.css']
})
export class InputAutocompleteComponent implements OnInit {

  @Input()
  inputName: string = '';

  @Input()
  label: string = '';

  @Input()
  options$: Observable<AutocompleteOption[]>;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    this.inputHasFocus = this.elementRef.nativeElement.contains(event.target) ? true : false;
  }

  formControl: FormControl = new FormControl('');
  filteredOptions$: Observable<any>;
  inputHasFocus: boolean;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.filteredOptions$ = this.formControl.valueChanges.pipe(
      startWith(this.formControl.value),
      debounceTime(400),
      // distinctUntilChanged(),
      switchMap(val => {
        return this.filter(val || '')
      })
    )
  }

  filter(val: string): Observable<AutocompleteOption[]> {
    return this.options$
      .pipe(
        map(response => response
          .filter(option => {
            return option.label.toLowerCase().includes(val.toLowerCase());
          })
        )
      );
  }

}
