import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCityWeatherComponent } from './search-city-weather/search-city-weather.component';


const routes: Routes = [
  {
    path: '',
    component: SearchCityWeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }