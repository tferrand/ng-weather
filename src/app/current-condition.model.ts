import { WeatherLocation } from "./weather-location.model";

export interface CurrentCondition {
  location: WeatherLocation;
  date: Date;
  data: any;
}