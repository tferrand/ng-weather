import { Component, HostListener, Input, TemplateRef } from '@angular/core';
import { merge, NEVER, Observable, of, Subject, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-state-button',
  templateUrl: './state-button.component.html',
  styleUrls: ['./state-button.component.css']
})
export class StateButtonComponent {

  clickSubject: Subject<void> = new Subject();

  @Input()
  initialTemplate: TemplateRef<any>;
  @Input()
  workingTemplate: TemplateRef<any>;
  @Input()
  doneTemplate: TemplateRef<any>;

  // @Input()
  // clickAction: (args: any) => Observable<any>;

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
          of(this.workingTemplate),
          timer(500).pipe(
            map(() => this.doneTemplate)
          ),
          timer(1000).pipe(
            map(() => this.initialTemplate)
          ),
        ))
      ),
    );
  }

}