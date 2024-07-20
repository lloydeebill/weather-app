import { Weather } from "./weather";
import { UIWeather } from "./ui";

const weather = new Weather();
const uiWeather = new UIWeather();

async function getWeatherData(location) {
  try {
    const weatherData = await weather.fetchWeather(location);
    uiWeather.updateTodayWeather(weatherData, "metric");
  } catch (error) {
    console.error("Failed to fetch weather data", error);
  }
}

function initEventListeners() {
  const fahrButton = document.querySelector(".fahr-button");
  const celsButton = document.querySelector(".cels-button");
  const searchButton = document.querySelector(".search-button");

  fahrButton.addEventListener("click", () => {
    uiWeather.updateTodayWeather(weather.weatherData, "imperial");
  });

  celsButton.addEventListener("click", () => {
    uiWeather.updateTodayWeather(weather.weatherData, "metric");
  });

  searchButton.addEventListener("click", async () => {
    const locationInput = document.querySelector(".search-input").value;

    if (locationInput) {
      await getWeatherData(locationInput);
    } else {
      alert("Please enter a location");
    }
  });
}

export { getWeatherData, initEventListeners };
