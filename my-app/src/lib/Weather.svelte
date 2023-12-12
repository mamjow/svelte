<script lang="ts">
    import type { CurrentWeather } from "./CurrentWeather";
    export let weatherData: CurrentWeather;
</script>

<div class="flex flex-col justify-center">
    <div class="text-xl">{weatherData?.location.name}</div>
    <div class="text-xs">{weatherData?.location.country}</div>
    <div class="pt-5">
        <div>{weatherData?.current.condition.text}</div>
        <div class="flex flex-row justify-between content-start">
            <img
                class="w-100"
                src={weatherData?.current.condition.icon}
                alt="Weather condition icon"
            />
            <div
                class="text-4xl after:content-['℃'] after:text-sm after:align-top"
            >
                {weatherData?.current.temp_c}
            </div>
        </div>
    </div>
</div>
