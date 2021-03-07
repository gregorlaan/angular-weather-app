import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.getWeatherForecast();
  }

  getWeatherForecast(): void {
    this.weatherService.getForecast
  }

}
