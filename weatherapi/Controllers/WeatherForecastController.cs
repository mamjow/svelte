using Microsoft.AspNetCore.Mvc;
using weatherservice;

namespace weatherapi.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class WeatherForecastController : ControllerBase
	{
		private readonly IWeatherService _weatherService;
		private readonly ILogger<WeatherForecastController> _logger;

		public WeatherForecastController(ILogger<WeatherForecastController> logger, IWeatherService weatherService )
		{
			_weatherService = weatherService;
			_logger = logger;
		}

		[HttpGet("{city}")]
		public Task<CurrentWeather> GetCurrentWeather(string city)
		{
			return _weatherService.GetCurrentWeather(city);
		}
	}
}