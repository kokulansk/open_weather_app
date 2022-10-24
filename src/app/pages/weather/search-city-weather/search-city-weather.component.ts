import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { combineLatest, Observable, of, BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime, delay, tap, filter, map, takeUntil } from 'rxjs/operators';
import { cities } from '../../../shared/constants/cities.constant';
import { ICity } from '../interfaces/city.interface';
import { SearchCityWeatherService } from '../services/search-city-weather.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { IWeather } from '../interfaces/weather.interface';

@Component({
  selector: 'app-search-city-weather',
  templateUrl: './search-city-weather.component.html',
  styleUrls: ['./search-city-weather.component.css']
})
export class SearchCityWeatherComponent implements OnInit {

  obs:Subscription;
  public citiesCtrl: FormControl = new FormControl();
  public cityFilterCtrl: FormControl = new FormControl();
  cities: ICity[] = cities;
  filteredCities: ICity[] = [];
  weather: IWeather = {} as IWeather;


  @ViewChild('singleSelect', { static: true })
  singleSelect!: MatSelect;

  constructor(private searchCityWeatherService: SearchCityWeatherService, private _snackBar: MatSnackBar) {
    this.obs = this.cityFilterCtrl.valueChanges.pipe(debounceTime(1000)).subscribe(cityText => {
      this.filteredCities = this.cities.filter((city) => { return this.isMatchText(city, cityText) });
      
    });
  }

  ngOnInit() {

  }

  isMatchText(city: ICity, text: string) {
    const lowerSearchString = text.toLowerCase();
    const containsText = (source: string) => (source ? source.toLocaleLowerCase().includes(lowerSearchString) : false);
    return containsText(city.name);
  }

  getWeather() {
    let lat = this.citiesCtrl.value?.latitude;
    let lon = this.citiesCtrl.value?.longitude;
    this.searchCityWeatherService.getWeatherDataByCity(lat, lon)
      .subscribe(data => {
        this.weather = data.main;
      },
      (error) => {
        this.openSnackBar('Could not get weather data', 'Error');
      });

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  ngOnDestroy() {
    this.obs.unsubscribe();
  }

}