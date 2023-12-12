using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace weatherdata
{
	public class WeatherAPIConfig
	{
		public string ConfigName = "weatherApi";
		public string BaseAddress { get; set; } = String.Empty;
		public string Token { get; set; } = String.Empty;
	}
}
