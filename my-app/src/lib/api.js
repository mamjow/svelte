const API_KEY = '33aa00aa5bb84555883111043231012';
const BASE_URL = 'http://api.weatherapi.com/v1/current.json?';

export async function getWeatherData(city) {
  const response = await fetch(`${BASE_URL}key=${API_KEY}&q=${city}`);
  const data = await response.json();
  return data;
}