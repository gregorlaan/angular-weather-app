import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/forecast?q=Tartu,EE&APPID=6cc8e511860a22f9e3eff039e17d7523&units=metric';

  constructor(
    private http: HttpClient
  ) { }

  async getForecast(): Promise<void> {
    const that = this;
    await this.http.get(this.apiUrl)
                   .toPromise()
                   .then((res: any) => {
                     let forecast = res;
                     console.log(forecast);
                   });
  }
}
