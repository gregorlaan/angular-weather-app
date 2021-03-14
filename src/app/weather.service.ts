import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cities } from './data/cities.json';
import { City } from './city';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private citiesList:City[] = [];
  private apiCurrentWeatherUrl: URL = new URL('https://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=6cc8e511860a22f9e3eff039e17d7523');
  private apiOneCallUrl: URL = new URL('https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly,alerts&APPID=6cc8e511860a22f9e3eff039e17d7523&units=metric');
  private weatherForecast: BehaviorSubject<Weather> = new BehaviorSubject<Weather>(<Weather>{});

  constructor(
    private http: HttpClient
  ) { }

  async initCities(): Promise<void> {
    for(const city of cities) {
      const location = city + ',EE';
      this.apiCurrentWeatherUrl.searchParams.set('q', location);

      await this.http.get(this.apiCurrentWeatherUrl.href)
                     .toPromise()
                     .then((res: any) => {
                       const currentCity = {
                         name: city,
                         location: res.city.coord
                       }

                       this.citiesList.push(currentCity);
                     });

    }
  }

  async setWeatherForecast(city: City): Promise<void> {
    this.apiOneCallUrl.searchParams.set('lat', String(city.location.lat));
    this.apiOneCallUrl.searchParams.set('lon', String(city.location.lon));

    await this.http.get(this.apiOneCallUrl.href)
                   .toPromise()
                   .then((res: any) => {
                     let forecast = res;

                     const weatherForecast = {
                       name: city.name,
                       current: {
                         dt: forecast.current.dt,
                         clouds: forecast.current.clouds,
                         wind_deg: forecast.current.wind_deg,
                         wind_speed: forecast.current.wind_speed,
                         feels_like: forecast.current.feels_like,
                         pressure: forecast.current.pressure,
                         temp: forecast.current.temp,
                         humidity: forecast.current.humidity
                     },
                       daily: forecast.daily
                     };

                     this.weatherForecast.next(weatherForecast);
                   });
  }

  public getCitiesList(): City[] {
    return this.citiesList;
  }

  public getWeatherForecast(): BehaviorSubject<Weather> {
    return this.weatherForecast;
  }
}
