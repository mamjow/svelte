﻿using System.Text.Json.Serialization;

namespace weatherservice;

public class Current
{
	[JsonPropertyName("last_updated_epoch")]
	public int LastUpdatedEpoch { get; set; }

	[JsonPropertyName("last_updated")]
	public string LastUpdated { get; set; } = string.Empty;

	[JsonPropertyName("temp_c")]
	public double TempC { get; set; }

	[JsonPropertyName("temp_f")]
	public double TempF { get; set; }

	[JsonPropertyName("is_day")]
	public int IsDay { get; set; }

	[JsonPropertyName("condition")]
	public Condition? Condition { get; set; }

	[JsonPropertyName("wind_mph")]
	public double WindMph { get; set; }

	[JsonPropertyName("wind_kph")]
	public double WindKph { get; set; }

	[JsonPropertyName("wind_degree")]
	public double WindDegree { get; set; }

	[JsonPropertyName("wind_dir")]
	public string WindDir { get; set; } = string.Empty;

	[JsonPropertyName("pressure_mb")]
	public double PressureMb { get; set; }

	[JsonPropertyName("pressure_in")]
	public double PressureIn { get; set; }

	[JsonPropertyName("precip_mm")]
	public double PrecipMm { get; set; }

	[JsonPropertyName("precip_in")]
	public double PrecipIn { get; set; }

	[JsonPropertyName("humidity")]
	public double Humidity { get; set; }

	[JsonPropertyName("cloud")]
	public double Cloud { get; set; }

	[JsonPropertyName("feelslike_c")]
	public double FeelslikeC { get; set; }

	[JsonPropertyName("feelslike_f")]
	public double FeelslikeF { get; set; }

	[JsonPropertyName("vis_km")]
	public double VisKm { get; set; }

	[JsonPropertyName("vis_miles")]
	public double VisMiles { get; set; }

	[JsonPropertyName("uv")]
	public double Uv { get; set; }

	[JsonPropertyName("gust_mph")]
	public double GustMph { get; set; }

	[JsonPropertyName("gust_kph")]
	public double GustKph { get; set; }
}


