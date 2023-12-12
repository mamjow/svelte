﻿using System.Text.Json.Serialization;

namespace weatherservice;

public class Condition
{
	[JsonPropertyName("text")]
	public string Text { get; set; } = string.Empty;

	[JsonPropertyName("icon")]
	public string Icon { get; set; } = string.Empty;

	[JsonPropertyName("code")]
	public int Code { get; set; }
}


