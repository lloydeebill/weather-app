import "./style.css";
import { Weather } from "./modules/weather";

const weather = new Weather();

async function getWeatherData() {
  try {
    await weather.fetchWeather();

    console.log(weather.weatherData);

    weather.todayWeather("metric");
  } catch (error) {
    console.error("Failed to fetch weather data", error);
  }
}

const fahrButton = document.querySelector(".fahr-button");
const celsButton = document.querySelector(".cels-button");

fahrButton.addEventListener("click", () => {
  weather.todayWeather("imperial");
});

celsButton.addEventListener("click", () => {
  weather.todayWeather("metric");
});

getWeatherData();
