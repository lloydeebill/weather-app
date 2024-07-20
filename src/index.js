import "./style.css";
import { getWeatherData, initEventListeners } from "./modules/events";

document.addEventListener("DOMContentLoaded", () => {
  initEventListeners();
  getWeatherData("Butuan City");
});
