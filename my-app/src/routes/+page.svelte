<!-- index.svelte -->
<script>
    import { onMount } from "svelte";
    import { getWeatherData } from "$lib/api";
    import Weather from "$lib/Weather.svelte";

    /**
     * @type {any}
     */
    let weatherData;
    let city = "'s-hertogenbosch";
    onMount(async () => {
        weatherData = await getWeatherData(city);
    });
    const getWeather = async () => {
        weatherData = await getWeatherData(city);
    };
</script>

<div
    class="flex flex-col items-center justify-center w-screen h-screen bg-gray-200"
>
    <form on:submit|preventDefault={getWeather}>
        <div class="relative text-gray-400 focus-within:text-gray-400 m-2">
            <span class="absolute inset-y-0 left-0 flex items-center">
                <button
                    type="submit"
                    class="focus:outline-none focus:shadow-outline"
                >
                    <svg
                        fill="transparent"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        class="w-6 h-6"
                        ><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path></svg
                    >
                </button>
            </span>
            <input
                type="search"
                id="city"
                bind:value={city}
                class="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="'s-hertogenbosch"
            />
        </div>
    </form>
    <Weather {weatherData} />
</div>

<style>
    button {
        background-color: transparent !important;
    }
    form {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }

    button {
        background-color: #4caf50;
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
    }
</style>
