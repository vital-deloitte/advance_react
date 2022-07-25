export interface WeatherType {
  weather: [
    {
      id: Number;
      main: String;
      description: String;
      icon: String;
    }
  ];
  main: Main;
  dt: Number;
  name: String;
  sys: Sys;
}

export interface Main {
  temp: Number;
  feels_like: Number;
  temp_min: Number;
  temp_max: Number;
  pressure: Number;
  humidity: Number;
}

export interface Sys {
  sunrise: 1658709202;
  sunset: 1658755111;
}

export interface WeatherStateType {
  weatherDesc: WeatherType[];
}
