export interface Weather {
  name: string;
  current: {
    dt: number;
    clouds: number;
    wind_deg: number;
    wind_speed: number;
    feels_like: number;
    pressure: number;
    temp: string;
    humidity: number;
  },
  daily: Array<Daily>
}

interface Daily {
  dt: number,
  clouds: number,
  wind_deg: number,
  wind_speed: number,
  feels_like: {
    day: number,
    eve: number,
    morn: number,
    night: number
  },
  pressure: number,
  temp: {
    day: number,
    eve: number,
    max: number,
    min: number,
    morn: number,
    night: number
  },
  humidity: number,
}
