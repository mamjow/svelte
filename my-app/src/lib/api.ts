import type { CurrentWeather } from "./CurrentWeather";

import { getUrl } from '$lib/secret.ts'
const API_URL = getUrl();

export async function getWeatherData(city: string) {
  const response = await fetch(`${API_URL}/WeatherForecast/${city}`);
  const data = await response.json();
  console.log(data);
  return data as CurrentWeather;
}