import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import "dotenv";
const Weather = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { weatherData = {
    current: {
      last_updated_epoch: 1702211400,
      last_updated: "2023-12-10 13:30",
      temp_c: 11,
      temp_f: 51.8,
      is_day: 1,
      condition: {
        text: "Overcast",
        icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
        code: 1009
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
      gust_kph: 34.4
    },
    location: {
      name: "Tilburg",
      region: "North Brabant",
      country: "Netherlands",
      lat: 51.56,
      lon: 5.09,
      tz_id: "Europe/Amsterdam",
      localtime_epoch: 1702211509,
      localtime: "2023-12-10 13:31"
    }
  } } = $$props;
  if ($$props.weatherData === void 0 && $$bindings.weatherData && weatherData !== void 0)
    $$bindings.weatherData(weatherData);
  return `<div class="flex flex-col justify-center"><div class="text-xl">${escape(weatherData.location.name)}</div> <div class="text-xs">${escape(weatherData.location.country)}</div> <div class="pt-5"><div>${escape(weatherData.current.condition.text)}</div> <div class="flex flex-row justify-between content-start"><img class="w-100"${add_attribute("src", weatherData.current.condition.icon, 0)} alt="Weather condition icon"> <div class="text-4xl after:content-['℃'] after:text-sm after:align-top">${escape(weatherData.current.temp_c)}</div></div></div></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-1jxafj2{background-color:transparent !important}form.svelte-1jxafj2{display:flex;gap:10px;margin-bottom:20px}button.svelte-1jxafj2{background-color:#4caf50;color:white;border:none;padding:10px 15px;cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let weatherData;
  let city = "'s-hertogenbosch";
  $$result.css.add(css);
  return `  <div class="flex flex-col items-center justify-center w-screen h-screen bg-gray-200"><form class="svelte-1jxafj2"><div class="relative text-gray-400 focus-within:text-gray-400 m-2"><span class="absolute inset-y-0 left-0 flex items-center" data-svelte-h="svelte-sfh63g"><button type="submit" class="focus:outline-none focus:shadow-outline svelte-1jxafj2"><svg fill="transparent" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button></span> <input type="search" id="city" class="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="'s-hertogenbosch"${add_attribute("value", city, 0)}></div></form> ${validate_component(Weather, "Weather").$$render($$result, { weatherData }, {}, {})} </div>`;
});
export {
  Page as default
};
