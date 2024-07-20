class UIWeather {
  updateTodayWeather(weatherData, unit) {
    const weatherTitle = document.querySelector(".weather-title");
    weatherTitle.innerText = `${weatherData.current.condition.text}`;

    const weatherLocation = document.querySelector(".weather-location");
    weatherLocation.innerText = `${weatherData.location.name}`;

    let tempUnit = unit === "metric" ? "°C" : "°F";
    let tempValue =
      unit === "metric"
        ? weatherData.current.temp_c
        : weatherData.current.temp_f;

    const weatherTemp = document.querySelector(".weather-temp");
    weatherTemp.innerText = `${tempValue} ${tempUnit}`;

    let feelsLikeUnit = unit === "metric" ? "°C" : "°F";
    let feelsLikeValue =
      unit === "metric"
        ? weatherData.current.feelslike_c
        : weatherData.current.feelslike_f;

    const feelsLike = document.querySelector(".feels-like");
    feelsLike.innerText = `Feels like: ${feelsLikeValue} ${feelsLikeUnit}`;

    let windUnit = unit === "metric" ? "kph" : "mph";
    let windValue =
      unit === "metric"
        ? weatherData.current.wind_kph
        : weatherData.current.wind_mph;

    const wind = document.querySelector(".wind");
    wind.innerText = `Wind: ${windValue} ${windUnit}`;

    const humidity = document.querySelector(".humidity");
    humidity.innerText = `Humidity: ${weatherData.current.humidity}%`;
  }
}

export { UIWeather };
