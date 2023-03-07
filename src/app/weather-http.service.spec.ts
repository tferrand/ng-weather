import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { Observable } from 'rxjs';
import { CurrentCondition } from './current-condition.model';
import { WeatherHttpService } from './weather-http.service';
import { WeatherLocation } from './weather-location.model';

describe('WeatherHttpService', () => {
  let service: WeatherHttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(WeatherHttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getWeather', () => {

    const mockLocation: WeatherLocation = {
      countrycode: 'FR',
      zipcode: '75000'
    };
    const requestUrl: string = `${WeatherHttpService.URL}/weather?zip=${mockLocation.zipcode},${mockLocation.countrycode.toLocaleLowerCase()}&units=imperial&APPID=${WeatherHttpService.APPID}`;

    it('should return an Observable', () => {
      expect(service.getWeather(mockLocation)).toEqual(jasmine.any(Observable));
    });

    it('should use GET for the http request', () => {

      service.getWeather(mockLocation).subscribe();

      const req = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('GET');
    });

    it('should return mapped data', () => {

      const expectedData: any = JSON.parse('{ "coord": { "lon": 0.15, "lat": 45.65 }, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }], "base": "stations", "main": { "temp": 46.67, "feels_like": 43.21, "temp_min": 45.59, "temp_max": 47.35, "pressure": 1006, "humidity": 67 }, "visibility": 10000, "wind": { "speed": 6.91, "deg": 160 }, "clouds": { "all": 100 }, "dt": 1678202073, "sys": { "type": 1, "id": 6468, "country": "FR", "sunrise": 1678170484, "sunset": 1678211597 }, "timezone": 3600, "id": 0, "name": "Angoulême", "cod": 200 }');
      const expectedMappedData: CurrentCondition = {
        location: mockLocation, data: expectedData, date: new Date()
      };

      service.getWeather(mockLocation).subscribe({
        next: data => {
          // On vérifie que l'objet retourné possède toutes les propriétés requises
          expect(Object.keys(data)).toEqual(Object.keys(expectedMappedData));
          // et que les valeurs des propriétés sont correctes
          expect(data.location).toEqual(mockLocation);
          expect(data.data).toEqual(expectedData);
        },
        error: error => fail('Method was expected to be successful')
      });

      const req = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('GET');

      req.flush(expectedData);
    });

    it('should fail if http request returns an error', () => {
      const httpErrorMsg = 'Deliberate 404';

      service.getWeather(mockLocation).subscribe({
        next: data => fail('Method was expected to fail'),
        error: error => {
          expect(error.status).toEqual(404);
          expect(error.error).toEqual(httpErrorMsg);
        }
      });

      const req = httpTestingController.expectOne(requestUrl);

      req.flush(httpErrorMsg, { status: 404, statusText: 'Not found' });
    });

  });

});