import { Component, HostListener, Input, TemplateRef } from '@angular/core';
import { NEVER, Observable, of, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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

    /**
     * TODO : Etape 3
     * 
     * RxJS à utiliser :
     * of, timer, Opérateur de transformation, Opérateurs "Higher-order mapping", Opérateurs de combinaison de sources
     * 
     * Méthodes internes à utiliser:
     * clickSubject : Subject qui émet une valeur à chaque fois que le bouton est cliqué
     * clickAction : Fonction associée au bouton
     */
    this.currentTemplate$ = of(this.initialTemplate);
    this.clickSubject.asObservable().pipe(
      switchMap(() => this.clickAction())
    ).subscribe();
  }

}