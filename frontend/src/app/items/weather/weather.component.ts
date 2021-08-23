import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/core/models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  @Input() data: Weather;
  constructor() {}

  ngOnInit(): void {}
}
