export interface DataType {
  cod: string;
  name: string;
  sys: Sys;
  coord: Coordinate;
  message?: string;
}

interface Sys {
  country: string;
}

interface Coordinate {
  lat: number;
  lon: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface FetchData {
  current: Current;
  daily: [Daily];
  lat: number;
  lon: number;
  timezone: string;
}

interface Current {
  weather: [Weather];
  dt: number;
  temp: number;
  feels_like: number;
  clouds: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
}

export interface Daily {
  weather: [Weather];
  dt: number;
  temp: DailyTemp;
  feels_like: DailyFeelsLike;
  clouds: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
}

interface DailyTemp {
  morn: number;
  day: number;
  eve: number;
  night: number;
  min: number;
  max: number;
}

interface DailyFeelsLike {
  morn: number;
  day: number;
  eve: number;
  night: number;
}
