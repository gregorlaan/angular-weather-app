import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { City } from '../city';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public citiesList:City[] = [];
  public selectedCity: City = <City>{};

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit(): void {
    this.getCitiesList();
    this.getWeatherForecast();
  }

  getCitiesList(): void {
    this.citiesList = this.weatherService.getCitiesList();
  }

  getWeatherForecast(): void {
    if(!this.selectedCity) {
      this.weatherService.clearWeatherForecast();
    }
    else if(this.selectedCity.name) {
      this.weatherService.setWeatherForecast(this.selectedCity);
    }
  }

}
