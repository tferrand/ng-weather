import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AppModule } from "app/app.module";
import { CurrentCondition } from "app/current-condition.model";
import { LocationService } from "app/location.service";
import { WeatherService } from "app/weather.service";
import { Observable, of, Subscription } from "rxjs";
import { CurrentConditionsComponent } from "./current-conditions.component";

describe('CurrentConditionsComponent', () => {
  let component: CurrentConditionsComponent;
  let fixture: ComponentFixture<CurrentConditionsComponent>;

  let weatherService: WeatherService;
  let locationService: LocationService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentConditionsComponent],
      imports: [
        AppModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentConditionsComponent);
    component = fixture.componentInstance;

    weatherService = TestBed.inject(WeatherService);
    locationService = TestBed.inject(LocationService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should assign the observable to the variable currentConditions$', (done) => {
      const mockCurrentConditions: CurrentCondition[] = [
        {
          location: {
            countrycode: 'FR',
            zipcode: '75000'
          },
          date: new Date(),
          data: 'XXX'
        },
        {
          location: {
            countrycode: 'US',
            zipcode: '10000'
          },
          date: new Date(),
          data: 'YYY'
        }
      ]

      const spy = spyOnProperty(weatherService, 'currentConditions$', 'get')
        .and
        .returnValue(of(mockCurrentConditions));

      component.ngOnInit();

      let subscription: Subscription = component.currentConditions$.subscribe({
        next: (v) => {
          expect(v).toEqual(mockCurrentConditions);
        },
        complete: () => {
          done();
        },
      });

      subscription.unsubscribe();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('#removeLocation', () => {
    it('should call locationService.removeLocation with correct argument', () => {
      spyOn(locationService, 'removeLocation').and.callThrough();

      component.removeLocation('XXX');

      expect(locationService.removeLocation).toHaveBeenCalledOnceWith('XXX');
    });
  });


});