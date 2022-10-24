import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCityWeatherComponent } from './search-city-weather/search-city-weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    SearchCityWeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    AngularMaterialModule
  ]
})
export class WeatherModule { }
