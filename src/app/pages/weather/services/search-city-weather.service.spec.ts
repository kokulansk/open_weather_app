import { TestBed } from '@angular/core/testing';

import { SearchCityWeatherService } from './search-city-weather.service';

describe('SearchCityWeatherService', () => {
  let service: SearchCityWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCityWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
