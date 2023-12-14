
using Microsoft.Extensions.DependencyInjection.Extensions;
using weatherapi;
using weatherservice;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddSwaggerGen();
builder.Services.AddEndpointsApiExplorer();

WeatherAPIConfig weatherAPIConfig = new();
builder.Configuration.GetSection(WeatherAPIConfig.ConfigName).Bind(weatherAPIConfig);
var frontEndDomain = builder.Configuration.GetValue<string>("frontEndDomain") ?? "http://localhost:5173";
builder.Services.AddCors(option => {
	option.AddPolicy("AllowSpecificOrigin",
					builder => builder
						.WithOrigins(frontEndDomain) 
						.AllowAnyMethod()
						.AllowAnyHeader()
						.AllowCredentials());
});
builder.Services.AddHttpClient<IWeatherService, WeatherService>((provider, client) =>
{
	client.BaseAddress = new Uri($"{weatherAPIConfig.BaseAddress}/current.json?key={weatherAPIConfig.Token}");

});

builder.Services.TryAddScoped<IWeatherService, WeatherService>();

var app = builder.Build();
app.UseCors("AllowSpecificOrigin");
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
