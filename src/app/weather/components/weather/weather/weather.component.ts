import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit {
  cities = ['Sokoto', 'Chicago', 'Toronto'];
  selectedCity: string = '';
  selectedWeather: any = {
    main: {
      temp: '--', 
    },
    wind: {
      speed: '--', 
    },
    weather: [{
      icon: 'unknown', 
    }]
  }; 

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    if (this.cities.length > 0) {
      this.selectedCity = this.cities[0];
      this.getWeather(this.selectedCity);
    }
  }

  getWeather(city: string) {
    this.weatherService.getWeather([city])
      .subscribe(data => {
        this.selectedWeather = data[0];
      });
  }

  onCityChange() {
    this.getWeather(this.selectedCity);
  }
}





