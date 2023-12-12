
using System.Net.Http.Json;

namespace weatherservice;

public class WeatherService : IWeatherService
{
	private readonly HttpClient _client;
	public WeatherService(HttpClient client)
	{
		_client = client;
	}
	public async Task<CurrentWeather> GetCurrentWeather(string city)
	{

		var currentWeather = await _client.GetFromJsonAsync<CurrentWeather>($"{_client.BaseAddress}&q={city}");
		return currentWeather ?? throw new Exception();
	}
}
