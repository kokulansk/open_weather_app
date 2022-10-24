import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCityWeatherComponent } from './search-city-weather/search-city-weather.component';
import { WeatherRoutingModule } from './weather-routing.module';



@NgModule({
  declarations: [
    SearchCityWeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
