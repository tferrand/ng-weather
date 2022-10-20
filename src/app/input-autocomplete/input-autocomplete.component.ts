import { Component, ElementRef, forwardRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AutocompleteOption } from 'app/autocomplete-option.model';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputAutocompleteComponent)
    }
  ]
})
export class InputAutocompleteComponent implements OnInit, OnDestroy, ControlValueAccessor {

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
  filteredOptions$: Observable<AutocompleteOption[]>;
  inputHasFocus: boolean;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.formControl.valueChanges.subscribe(() => {
        this._onChange(this.formControl.value);
      })
    );

    this.filteredOptions$ = this.formControl.valueChanges.pipe(
      startWith(this.formControl.value),
      debounceTime(400),
      // distinctUntilChanged(),
      switchMap(val => {
        return this.filter(val || '')
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
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

  writeValue(value: string) {
    this.formControl.setValue(value);
  }

  private _onChange = (_value: string): void => undefined;
  public registerOnChange(fn: (value: string) => void): void {
    this._onChange = fn;
  }

  public onTouched = (): void => undefined;
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
  }
}
