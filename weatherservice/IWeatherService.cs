using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace weatherservice
{
	public interface IWeatherService
	{
		Task<CurrentWeather> GetCurrentWeather(string city);
	}
}
