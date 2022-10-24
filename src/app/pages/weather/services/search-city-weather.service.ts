import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchCityWeatherService {

  constructor(private http: HttpClient) { }

  getWeatherDataByCity(lat: number, lon: number): Observable<any> {
    let openApiWeatherApi = environment.openApiWeather;
    openApiWeatherApi = openApiWeatherApi.replace('{lat}', lat.toString());
    openApiWeatherApi = openApiWeatherApi.replace('{lon}', lon.toString());
    openApiWeatherApi = openApiWeatherApi.replace('{API key}', environment.openWeatherApiKey.toString());

    return this.http.get(openApiWeatherApi);
  }
}
