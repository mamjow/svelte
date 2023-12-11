
import { getSecret } from '$lib/secret.js'
const API_KEY = getSecret();
const BASE_URL = 'http://api.weatherapi.com/v1/current.json?';

export async function getWeatherData(city) {
  const response = await fetch(`${BASE_URL}key=${API_KEY}&q=${city}`);
  const data = await response.json();
  return data;
}