"use strict";
(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 3088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
    constructor() {
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var _angular_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../angular.json */ 9798);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ 6738);
/* harmony import */ var _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./current-conditions/current-conditions.component */ 5597);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 8405);
/* harmony import */ var _highlight_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./highlight.pipe */ 296);
/* harmony import */ var _input_autocomplete_input_autocomplete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input-autocomplete/input-autocomplete.component */ 750);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);
/* harmony import */ var _state_button_state_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state-button/state-button.component */ 6773);
/* harmony import */ var _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./zipcode-entry/zipcode-entry.component */ 7937);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















let AppModule = class AppModule {
};
AppModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
            _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_10__.ZipcodeEntryComponent,
            _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_5__.ForecastsListComponent,
            _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_4__.CurrentConditionsComponent,
            _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__.MainPageComponent,
            _state_button_state_button_component__WEBPACK_IMPORTED_MODULE_9__.StateButtonComponent,
            _input_autocomplete_input_autocomplete_component__WEBPACK_IMPORTED_MODULE_7__.InputAutocompleteComponent,
            _highlight_pipe__WEBPACK_IMPORTED_MODULE_6__.HighlightPipe
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
            _app_routing__WEBPACK_IMPORTED_MODULE_3__.routing,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__.ServiceWorkerModule.register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_17__.APP_BASE_HREF, useValue: _angular_json__WEBPACK_IMPORTED_MODULE_0__.projects["ng-weather"].architect.build.options.baseHref }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 6738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routing": () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 8405);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);



const appRoutes = [
    {
        path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
    },
    {
        path: 'forecast/:countrycode/:zipcode', component: _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
    }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });


/***/ }),

/***/ 5597:
/*!********************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentConditionsComponent": () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 9139);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 7303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var app_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/location.service */ 8056);
/* harmony import */ var app_weather_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/weather-http.service */ 9089);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8130);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../weather.service */ 7187);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let CurrentConditionsComponent = class CurrentConditionsComponent {
    constructor(weatherService, weatherHttpService, locationService, router) {
        this.weatherService = weatherService;
        this.weatherHttpService = weatherHttpService;
        this.locationService = locationService;
        this.router = router;
        this.currentConditions$ = rxjs__WEBPACK_IMPORTED_MODULE_5__.NEVER;
    }
    ngOnInit() {
        this.currentConditions$ = this.weatherService.currentConditions$;
    }
    removeLocation(zipcode) {
        this.locationService.removeLocation(zipcode);
    }
};
CurrentConditionsComponent.ctorParameters = () => [
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_4__.WeatherService },
    { type: app_weather_http_service__WEBPACK_IMPORTED_MODULE_3__.WeatherHttpService },
    { type: app_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
CurrentConditionsComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-current-conditions',
        template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CurrentConditionsComponent);



/***/ }),

/***/ 8405:
/*!************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForecastsListComponent": () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 4517);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 7309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var app_weather_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/weather-http.service */ 9089);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ForecastsListComponent = class ForecastsListComponent {
    constructor(weatherHttpService, route) {
        this.weatherHttpService = weatherHttpService;
        this.route = route;
        this.route.params.subscribe(params => {
            const weatherLocation = {
                countrycode: params['countrycode'],
                zipcode: params['zipcode']
            };
            this.weatherHttpService.getForecast(weatherLocation)
                .subscribe(data => this.forecast = data);
        });
    }
};
ForecastsListComponent.ctorParameters = () => [
    { type: app_weather_http_service__WEBPACK_IMPORTED_MODULE_2__.WeatherHttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ForecastsListComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-forecasts-list',
        template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForecastsListComponent);



/***/ }),

/***/ 296:
/*!***********************************!*\
  !*** ./src/app/highlight.pipe.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightPipe": () => (/* binding */ HighlightPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let HighlightPipe = class HighlightPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        const regex = new RegExp(args, 'gi');
        const match = value.match(regex);
        if (!match) {
            return value;
        }
        return value.replace(regex, `<mark><b>${match[0]}</b></mark>`);
    }
};
HighlightPipe = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
        name: 'highlight',
    })
], HighlightPipe);



/***/ }),

/***/ 750:
/*!********************************************************************!*\
  !*** ./src/app/input-autocomplete/input-autocomplete.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputAutocompleteComponent": () => (/* binding */ InputAutocompleteComponent)
/* harmony export */ });
/* harmony import */ var _input_autocomplete_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-autocomplete.component.html?ngResource */ 5934);
/* harmony import */ var _input_autocomplete_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-autocomplete.component.css?ngResource */ 8034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var InputAutocompleteComponent_1;






let InputAutocompleteComponent = InputAutocompleteComponent_1 = class InputAutocompleteComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.inputName = '';
        this.label = '';
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('');
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this._onChange = (_value) => undefined;
        this.onTouched = () => undefined;
    }
    clickout(event) {
        this.inputHasFocus = this.elementRef.nativeElement.contains(event.target) ? true : false;
    }
    ngOnInit() {
        this.subscriptions.add(this.formControl.valueChanges.subscribe(() => {
            this._onChange(this.formControl.value);
        }));
        this.filteredOptions$ = this.formControl.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(400), 
        // distinctUntilChanged(),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(val => {
            return this.filter(this.formControl.value || '');
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    filter(val) {
        return this.options$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(response => response
            .filter(option => {
            return option.label.toLowerCase().includes(val.toLowerCase());
        })));
    }
    writeValue(value) {
        this.formControl.setValue(value);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.formControl.disable();
        }
        else {
            this.formControl.enable();
        }
    }
};
InputAutocompleteComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef }
];
InputAutocompleteComponent.propDecorators = {
    inputName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    options$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    clickout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.HostListener, args: ['document:click', ['$event'],] }]
};
InputAutocompleteComponent = InputAutocompleteComponent_1 = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-input-autocomplete',
        template: _input_autocomplete_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.forwardRef)(() => InputAutocompleteComponent_1)
            }
        ],
        styles: [_input_autocomplete_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InputAutocompleteComponent);



/***/ }),

/***/ 8056:
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationService": () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.service */ 7187);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let LocationService = class LocationService {
    constructor(weatherService) {
        this.weatherService = weatherService;
        this.LOCATIONS_STORAGE_KEY = 'locations';
        this.locationsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.locations$ = this.locationsSubject.asObservable();
        this.setLocations(this.getLocations());
        for (let loc of this.locationsSubject.value) {
            this.weatherService.addCurrentConditions(loc);
        }
    }
    /**
     * Sets the locations in local storage
     */
    setLocations(locations) {
        localStorage.setItem(this.LOCATIONS_STORAGE_KEY, JSON.stringify(locations));
        this.locationsSubject.next([...locations]);
    }
    /**
     * Gets the locations from local storage as an array of string
     */
    getLocations() {
        const jsonValue = localStorage.getItem(this.LOCATIONS_STORAGE_KEY);
        if (!!jsonValue) {
            return JSON.parse(jsonValue);
        }
        return [];
    }
    /**
     * Removes one location value from the list stored in local storage
     */
    removeLocation(zipcode) {
        this.setLocations(this.getLocations().filter((value) => value.zipcode !== zipcode));
        this.weatherService.removeCurrentConditions(zipcode);
    }
    /**
     * Adds one location value to the list stored in local storage
     */
    addLocation(location) {
        if (!this.isLocationAlreadyAdded(location.zipcode)) {
            const newWeatherLocationsValue = [...this.getLocations(), location];
            this.setLocations(newWeatherLocationsValue);
            this.weatherService.addCurrentConditions(location);
        }
    }
    /**
     * Adds one location value to the list stored in local storage and returns observable
     */
    addLocationObs(location) {
        if (!this.isLocationAlreadyAdded(location.zipcode)) {
            const newWeatherLocationsValue = [...this.getLocations(), location];
            this.setLocations(newWeatherLocationsValue);
            return this.weatherService.addCurrentConditionsObs(location).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
                this.removeLocation(location.zipcode);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(err);
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(void 0);
    }
    /**
     * Returns true if location in parameter is already stored in local storage
     */
    isLocationAlreadyAdded(zipcode) {
        return this.getLocations().map(location => location.zipcode).includes(zipcode);
    }
};
LocationService.ctorParameters = () => [
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_0__.WeatherService }
];
LocationService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], LocationService);



/***/ }),

/***/ 2627:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageComponent": () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 8132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {
};
MainPageComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-main-page',
        template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], MainPageComponent);



/***/ }),

/***/ 6773:
/*!********************************************************!*\
  !*** ./src/app/state-button/state-button.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateButtonComponent": () => (/* binding */ StateButtonComponent)
/* harmony export */ });
/* harmony import */ var _state_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state-button.component.html?ngResource */ 831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8130);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 7418);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let StateButtonComponent = class StateButtonComponent {
    constructor() {
        this.clickSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.currentTemplate$ = rxjs__WEBPACK_IMPORTED_MODULE_2__.NEVER;
    }
    onClick() {
        this.clickSubject.next();
    }
    ngOnInit() {
        this.currentTemplate$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)(
        // Initial button template
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.initialTemplate), 
        // Triggered when button is clicked
        this.clickSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)(
        // display "workingTemplate" when button is clicked
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.workingTemplate), this.clickAction().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)(
        // display "doneTemplate" when clickAction observable returns value
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.doneTemplate), 
        // display "initialTemplate" 500ms after clickAction observable returns value
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(500).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => this.initialTemplate)))), 
        // display "initialTemplate" if error happened during clickAction observable
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.initialTemplate)))))));
    }
};
StateButtonComponent.propDecorators = {
    initialTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    workingTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    doneTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    clickAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.HostListener, args: ['click', ['$event.target'],] }]
};
StateButtonComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-state-button',
        template: _state_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], StateButtonComponent);



/***/ }),

/***/ 9089:
/*!*****************************************!*\
  !*** ./src/app/weather-http.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherHttpService": () => (/* binding */ WeatherHttpService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 6942);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherHttpService_1;



let WeatherHttpService = WeatherHttpService_1 = class WeatherHttpService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Request to the weather API for the zipcode
     */
    getWeather(location) {
        return this.http.get(`${WeatherHttpService_1.URL}/weather?zip=${location.zipcode},${location.countrycode.toLocaleLowerCase()}&units=imperial&APPID=${WeatherHttpService_1.APPID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(data => {
            const mapped = { location, data: data, date: new Date() };
            return mapped;
        }));
    }
    /**
     * Request to the forecast API for the zipcode
     */
    getForecast(location) {
        return this.http.get(`${WeatherHttpService_1.URL}/forecast/daily?zip=${location.zipcode},${location.countrycode.toLocaleLowerCase()}&units=imperial&cnt=5&APPID=${WeatherHttpService_1.APPID}`);
    }
    getWeatherIcon(id) {
        if (id >= 200 && id <= 232)
            return WeatherHttpService_1.ICON_URL + "art_storm.png";
        else if (id >= 501 && id <= 511)
            return WeatherHttpService_1.ICON_URL + "art_rain.png";
        else if (id === 500 || (id >= 520 && id <= 531))
            return WeatherHttpService_1.ICON_URL + "art_light_rain.png";
        else if (id >= 600 && id <= 622)
            return WeatherHttpService_1.ICON_URL + "art_snow.png";
        else if (id >= 801 && id <= 804)
            return WeatherHttpService_1.ICON_URL + "art_clouds.png";
        else if (id === 741 || id === 761)
            return WeatherHttpService_1.ICON_URL + "art_fog.png";
        else
            return WeatherHttpService_1.ICON_URL + "art_clear.png";
    }
};
WeatherHttpService.URL = 'https://api.openweathermap.org/data/2.5';
WeatherHttpService.APPID = '5a4b2d457ecbef9eb2a71e480b947604';
WeatherHttpService.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
WeatherHttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
WeatherHttpService = WeatherHttpService_1 = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], WeatherHttpService);



/***/ }),

/***/ 7187:
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherService": () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _weather_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-http.service */ 9089);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let WeatherService = class WeatherService {
    constructor(weatherHttpService) {
        this.weatherHttpService = weatherHttpService;
        this.currentConditionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.currentConditions$ = this.currentConditionsSubject.asObservable();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
        // Update weather value every 30 seconds
        this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(30000).subscribe(() => this.updateCurrentConditionsFromApi()));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    /**
     * Sets the currentConditions
     */
    setCurrentConditions(currentConditions) {
        this.currentConditionsSubject.next([...currentConditions]);
    }
    /**
     * Gets the currentConditions
     */
    getCurrentConditions() {
        return this.currentConditionsSubject.value;
    }
    /**
     * Adds the current conditions for the zipcode
     */
    addCurrentConditions(location) {
        this.weatherHttpService.getWeather(location).subscribe(data => this.currentConditionsSubject.next([...this.getCurrentConditions(), data]));
    }
    /**
     * Adds the current conditions for the zipcode and returns observable when done
     */
    addCurrentConditionsObs(location) {
        return this.weatherHttpService.getWeather(location).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(1000), // simulate long response to view the state change on the "state-button" component
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(data => this.currentConditionsSubject.next([...this.getCurrentConditions(), data])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(void 0)));
    }
    /**
     * Removes the current conditions for the zipcode
     */
    removeCurrentConditions(zipcode) {
        this.setCurrentConditions(this.getCurrentConditions().filter((value) => value.location.zipcode !== zipcode));
    }
    /**
     * Updates current conditions from API for all stored locations
     */
    updateCurrentConditionsFromApi() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)(this.getCurrentConditions()
            .map(currentCondtion => this.weatherHttpService.getWeather(currentCondtion.location))).subscribe(updatedCurrentConditions => this.setCurrentConditions(updatedCurrentConditions));
    }
};
WeatherService.ctorParameters = () => [
    { type: _weather_http_service__WEBPACK_IMPORTED_MODULE_0__.WeatherHttpService }
];
WeatherService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
    })
], WeatherService);



/***/ }),

/***/ 7937:
/*!**********************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZipcodeEntryComponent": () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 7606);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../location.service */ 8056);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let ZipcodeEntryComponent = class ZipcodeEntryComponent {
    constructor(baseHref, locationService, http, fb) {
        this.baseHref = baseHref;
        this.locationService = locationService;
        this.http = http;
        this.fb = fb;
        this.form = this.fb.group({
            countrycode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            zipcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
        });
        this.countriesOptions$ = this.http.get(`${this.baseHref}assets/countries.json`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data.map(country => {
            const autocompleteOption = {
                label: `${country.name} (${country.code})`,
                value: country.code
            };
            return autocompleteOption;
        })));
    }
    addLocation() {
        const weatherLocation = {
            countrycode: this.form.value.countrycode,
            zipcode: this.form.value.zipcode
        };
        return this.locationService.addLocationObs(weatherLocation)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => {
            this.form.reset();
        }));
    }
};
ZipcodeEntryComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.APP_BASE_HREF,] }] },
    { type: _location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
ZipcodeEntryComponent.propDecorators = {
    zipcode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['zipcode',] }]
};
ZipcodeEntryComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-zipcode-entry',
        template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], ZipcodeEntryComponent);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);


/***/ }),

/***/ 3088:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 7303:
/*!********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".close {\n  cursor: pointer;\n}\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbnQtY29uZGl0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJjdXJyZW50LWNvbmRpdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */";

/***/ }),

/***/ 7309:
/*!************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".icon {\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  right: 20px;\n  top: -2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmVjYXN0cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztBQUNYIiwiZmlsZSI6ImZvcmVjYXN0cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogLTJweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 8034:
/*!********************************************************************************!*\
  !*** ./src/app/input-autocomplete/input-autocomplete.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  display: block;\n  position: relative;\n}\n\nlabel,\ninput, \nul {\n  display: block;\n  width: 100%;\n}\n\nul {\n  position: absolute;\n  z-index: 10000;\n  max-height: 400px;\n  overflow-y: auto;\n  background: white;\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12); \n}\n\nul, li {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\nli {\n  cursor: pointer;\n}\n\nli:hover {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0dBQW9HO0FBQ3RHOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6ImlucHV0LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5sYWJlbCxcbmlucHV0LCBcbnVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG51bCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDA7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTsgXG59XG5cbnVsLCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5saSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59Il19 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 9139:
/*!*********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <div *ngFor=\"let location of currentConditions$ | async\" class=\"well flex\">\n    <div>\n      <h3>{{location.data.name}} ({{location.location.countrycode}}, {{location.location.zipcode}})</h3>\n      <h4>Current conditions: {{location.data.weather[0].main}}</h4>\n      <h4>Temperatures today:</h4>\n      <p>\n        Current {{location.data.main.temp | number:'.0-0'}}\n        - Max {{location.data.main.temp_max | number:'.0-0'}}\n        - Min {{location.data.main.temp_min | number:'.0-0'}}\n      </p>\n      <p>\n        Time of request : {{ location.date | date:'medium' }}\n      </p>\n      <p>\n        <a [routerLink]=\"['/forecast', location.location.countrycode, location.location.zipcode]\" >Show 5-day forecast for {{location.data.name}}</a>\n      </p>\n    </div>\n    <div>\n      <span class=\"close\" (click)=\"$event.stopPropagation(); removeLocation(location.location.zipcode)\">&times;</span>\n      <img [src]=\"weatherHttpService.getWeatherIcon(location.data.weather[0].id)\">\n    </div>\n </div>\n</div>\n";

/***/ }),

/***/ 4517:
/*!*************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">5-day forecast for {{forecast?.city.name}}</h3>\n\n    </div>\n    <ul class=\"list-group\">\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\n        {{ (dailyForecast.dt * 1000) | date:'EEEE, MMM d'}}:\n        {{dailyForecast.weather[0].main}}\n        - Min: {{dailyForecast.temp.min | number:'.0-0'}}\n        - Max: {{dailyForecast.temp.max | number:'.0-0'}}\n\n        <img [src]=\"weatherHttpService.getWeatherIcon(dailyForecast.weather[0].id)\" class=\"icon\">\n      </li>\n    </ul>\n  </div>\n</div>\n<button class=\"btn btn-success\" [routerLink]=\"'/'\" >< Back to main page</button>\n";

/***/ }),

/***/ 5934:
/*!*********************************************************************************!*\
  !*** ./src/app/input-autocomplete/input-autocomplete.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<label [for]=\"inputName\">{{ label }} :</label>\n<input [id]=\"inputName\" type=\"text\" placeholder=\"Enter {{ label | lowercase }}\" [formControl]=\"formControl\"\n  (focus)=\"inputHasFocus = true\" (blur)=\"onTouched()\" (input)=\"onTouched()\" class=\"form-control\" />\n\n<ul *ngIf=\"inputHasFocus\">\n  <li *ngFor=\"let item of filteredOptions$ | async\" [innerHTML]=\"item.label | highlight:formControl.value\"\n    (click)=\"formControl.setValue(item.value); inputHasFocus = false;\">\n  </li>\n</ul>";

/***/ }),

/***/ 8132:
/*!***************************************************************!*\
  !*** ./src/app/main-page/main-page.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid\">\n\n  <app-zipcode-entry> </app-zipcode-entry>\n  <app-current-conditions></app-current-conditions>\n\n</div>\n";

/***/ }),

/***/ 831:
/*!*********************************************************************!*\
  !*** ./src/app/state-button/state-button.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ng-container *ngTemplateOutlet=\"currentTemplate$ | async\">\n</ng-container>";

/***/ }),

/***/ 7606:
/*!***********************************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"well\">\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"addLocation()\">\n    <app-input-autocomplete formControlName=\"countrycode\" [inputName]=\"'country'\" [label]=\"'Country name'\" [options$]=\"countriesOptions$\"></app-input-autocomplete>\n    <br>\n    \n    <label for=\"zipcode\">Enter a zipcode :</label>\n    <input id=\"zipcode\" type=\"text\" #zipcode placeholder=\"Zipcode\" class=\"form-control\" formControlName=\"zipcode\">\n    <br>\n    <app-state-button [clickAction]=\"addLocation.bind(this)\" [initialTemplate]=\"initial\" [workingTemplate]=\"adding\"\n      [doneTemplate]=\"done\"></app-state-button>\n  </form>\n\n</div>\n\n<!-- buttons states -->\n<ng-template #initial>\n  <button class=\"btn btn-primary\">Add Location</button>\n</ng-template>\n\n<ng-template #adding>\n  <button class=\"btn btn-primary\" disabled>Adding...</button>\n</ng-template>\n\n<ng-template #done>\n  <button class=\"btn btn-success\" disabled>✅ Done</button>\n</ng-template>";

/***/ }),

/***/ 9798:
/*!**********************!*\
  !*** ./angular.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"./node_modules/@angular/cli/lib/config/schema.json","version":1,"newProjectRoot":"projects","projects":{"ng-weather":{"root":"","sourceRoot":"src","projectType":"application","architect":{"build":{"builder":"@angular-devkit/build-angular:browser","options":{"outputPath":"dist","index":"src/index.html","main":"src/main.ts","tsConfig":"src/tsconfig.app.json","polyfills":"src/polyfills.ts","assets":["src/assets","src/favicon.ico","src/manifest.json"],"styles":["src/styles.css","node_modules/bootstrap/dist/css/bootstrap.min.css"],"scripts":[],"aot":false,"vendorChunk":true,"extractLicenses":false,"buildOptimizer":false,"sourceMap":true,"optimization":false,"namedChunks":true,"baseHref":"/ng-weather/"},"configurations":{"production":{"optimization":true,"outputHashing":"all","sourceMap":false,"namedChunks":false,"aot":true,"extractLicenses":true,"vendorChunk":false,"buildOptimizer":true,"fileReplacements":[{"replace":"src/environments/environment.ts","with":"src/environments/environment.prod.ts"}],"serviceWorker":true}},"defaultConfiguration":""},"serve":{"builder":"@angular-devkit/build-angular:dev-server","options":{"browserTarget":"ng-weather:build"},"configurations":{"production":{"browserTarget":"ng-weather:build:production"}}},"extract-i18n":{"builder":"@angular-devkit/build-angular:extract-i18n","options":{"browserTarget":"ng-weather:build"}},"test":{"builder":"@angular-devkit/build-angular:karma","options":{"main":"src/test.ts","karmaConfig":"./karma.conf.js","polyfills":"src/polyfills.ts","tsConfig":"src/tsconfig.spec.json","scripts":[],"styles":["src/styles.css","node_modules/bootstrap/dist/css/bootstrap.min.css"],"assets":["src/assets","src/favicon.ico","src/manifest.json"]}}}},"ng-weather-e2e":{"root":"","sourceRoot":"","projectType":"application","architect":{"e2e":{"builder":"@angular-devkit/build-angular:protractor","options":{"protractorConfig":"./protractor.conf.js","devServerTarget":"ng-weather:serve"}}}}},"schematics":{"@schematics/angular:component":{"prefix":"app","style":"css"},"@schematics/angular:directive":{"prefix":"app"}}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map