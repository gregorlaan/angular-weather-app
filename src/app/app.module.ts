import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';

import { ForecastComponent } from './forecast/forecast.component';
import { WeatherService } from './weather.service';
import { SearchComponent } from './search/search.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: weatherProviderFactory,
      deps: [WeatherService],
      multi: true
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function weatherProviderFactory(provider: WeatherService) {
  return () => provider.initCities();
}
