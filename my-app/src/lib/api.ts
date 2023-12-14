import type { CurrentWeather } from "./CurrentWeather";

export async function getWeatherData(city: string) {
  const response = await fetch(`/api/WeatherForecast/${city}`);
  if(response.ok){
    const data = await response.json();
    console.log(data);
    return data as CurrentWeather;
  }

  console.log("data");
}