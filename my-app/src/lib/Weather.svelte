<script>
    // @ts-nocheck

    export let weatherData = {
        current: {
            last_updated_epoch: 1702211400,
            last_updated: "2023-12-10 13:30",
            temp_c: 11,
            temp_f: 51.8,
            is_day: 1,
            condition: {
                text: "Overcast",
                icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
                code: 1009,
            },
            wind_mph: 10.5,
            wind_kph: 16.9,
            wind_degree: 220,
            wind_dir: "SW",
            pressure_mb: 1005,
            pressure_in: 29.68,
            precip_mm: 0.01,
            precip_in: 0,
            humidity: 76,
            cloud: 100,
            feelslike_c: 8.3,
            feelslike_f: 46.9,
            vis_km: 10,
            vis_miles: 6,
            uv: 3,
            gust_mph: 21.4,
            gust_kph: 34.4,
        },

        location: {
            name: "Tilburg",
            region: "North Brabant",
            country: "Netherlands",
            lat: 51.56,
            lon: 5.09,
            tz_id: "Europe/Amsterdam",
            localtime_epoch: 1702211509,
            localtime: "2023-12-10 13:31",
        },
    };
</script>

<div class="flex flex-col justify-center">
    <div class="text-xl">{weatherData.location.name}</div>
    <div class="text-xs">{weatherData.location.country}</div>
    <div class="pt-5">
        <div>{weatherData.current.condition.text}</div>
        <div class="flex flex-row justify-between content-start">
            <img
                class="w-100"
                src={weatherData.current.condition.icon}
                alt="Weather condition icon"
            />
            <div class="text-4xl after:content-['℃'] after:text-sm after:align-top">{weatherData.current.temp_c}</div>
        </div>
    </div>
</div>
