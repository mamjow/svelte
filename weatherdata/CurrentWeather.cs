
using System.Text.Json.Serialization;

namespace weatherservice;
public class CurrentWeather
{
	[JsonPropertyName("current")]
	public Current? Current { get; set; }

	[JsonPropertyName("location")]
	public Location? Location { get; set; }
}


