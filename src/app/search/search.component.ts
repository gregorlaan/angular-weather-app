import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.getWeatherForecast();
  }

  getWeatherForecast(): void {
    const dummyData = {
      name: 'Tallinn',
      location: {
        lat: 58.3806,
        lon: 26.7251
      }
    };

    this.weatherService.setWeatherForecast(dummyData);
  }

}
