import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, forkJoin, map } from 'rxjs';
import { WeatherResponse } from '../model/model';

const BASE_URL = environment.BASE_URL;
const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(cities: string[]): Observable<WeatherResponse[]> {
    const requests = cities.map(city =>
      this.http.get(`${BASE_URL}${city}&appid=${API_KEY}&units=metric`)
    );
    return forkJoin(requests).pipe(
      map((dataArray: any[]) => dataArray.map(data => this.mapToWeatherResponse(data)))
    );
  }

  private mapToWeatherResponse(data: any): WeatherResponse {
    const weatherResponse: WeatherResponse = {
      weather: data.weather.map((weather: any) => ({
        id: weather.id,
        main: weather.main,
        description: weather.description,
        icon: weather.icon
      })),
      main: {
        temp: data.main.temp,
      },
      visibility: data.visibility,
      wind: {
        speed: data.wind.speed,
      },
      clouds: { all: data.clouds.all },
      dt: data.dt,
      timezone: data.timezone,
      id: data.id,
      name: data.name,
      cod: data.cod
    };
    return weatherResponse;
  }
}
