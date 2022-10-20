import { Component, HostListener, Input, TemplateRef } from '@angular/core';
import { merge, NEVER, Observable, of, Subject, timer } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-state-button',
  templateUrl: './state-button.component.html'
})
export class StateButtonComponent {

  clickSubject: Subject<void> = new Subject();

  @Input()
  initialTemplate: TemplateRef<any>;
  @Input()
  workingTemplate: TemplateRef<any>;
  @Input()
  doneTemplate: TemplateRef<any>;

  @Input()
  clickAction: () => Observable<any>;

  @HostListener('click', ['$event.target'])
  onClick() {
    this.clickSubject.next();
  }

  currentTemplate$: Observable<TemplateRef<any>> = NEVER;

  ngOnInit() {
    this.currentTemplate$ = merge(
      // Initial button template
      of(this.initialTemplate),
      // Triggered when button is clicked
      this.clickSubject.asObservable().pipe(
        switchMap(() => merge(
          // display "workingTemplate" when button is clicked
          of(this.workingTemplate),
          this.clickAction().pipe(
            switchMap(() => merge(
              // display "doneTemplate" when clickAction observable returns value
              of(this.doneTemplate),
              // display "initialTemplate" 500ms after clickAction observable returns value
              timer(500).pipe(
                map(() => this.initialTemplate)
              )
            )),
            // display "initialTemplate" if error happened during clickAction observable
            catchError(err => of(this.initialTemplate))
          ),
        )),
      ),
    );
  }

}