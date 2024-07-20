class UIWeather {
  updateTodayWeather(weatherData, unit) {
    const weatherTitle = document.querySelector(".weather-title");
    weatherTitle.innerText = `${weatherData.current.condition.text}`;

    const weatherLocation = document.querySelector(".weather-location");
    weatherLocation.innerText = `${weatherData.location.name}`;

    const weatherIcon = document.querySelector(".weather-icon");
    weatherIcon.src = `${weatherData.current.condition.icon}`;

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
    feelsLike.innerHTML = `Feels like: <span style="font-weight: bold;">${feelsLikeValue} ${feelsLikeUnit}</span>`;

    let windUnit = unit === "metric" ? "kph" : "mph";
    let windValue =
      unit === "metric"
        ? weatherData.current.wind_kph
        : weatherData.current.wind_mph;

    const wind = document.querySelector(".wind");
    wind.innerHTML = `Wind: <span style="font-weight: bold;">${windValue} ${windUnit}</span>`;

    const humidity = document.querySelector(".humidity");
    humidity.innerHTML = `Humidity: <span style="font-weight: bold;">${weatherData.current.humidity}% </span>`;
  }
  updateWeekWeather(weatherData, unit) {
    const weatherWeekInfo = document.querySelector(".weather-week-info");
    weatherWeekInfo.innerHTML = "";

    const forecastDays = weatherData.forecast.forecastday;
    const upcomingDays = forecastDays.slice(1, 8);
    upcomingDays.forEach((day) => {
      const date = this.formatDate(day.date);
      const icon = day.day.condition.icon;
      const temp = unit === "metric" ? day.day.avgtemp_c : day.day.avgtemp_f;

      const weatherDayCard = this.createDayCard(date, icon, temp, unit);

      weatherWeekInfo.appendChild(weatherDayCard);
    });
  }
  createDayCard(date, icon, temp, unit) {
    const weatherDayCard = document.createElement("div");
    weatherDayCard.classList.add("weather-day-card");

    const weatherDate = document.createElement("h4");
    weatherDate.innerText = date;

    const weatherIcon = document.createElement("img");
    weatherIcon.src = icon;

    const weatherTemp = document.createElement("p");
    weatherTemp.innerText = `${temp} ${unit === "metric" ? "°C" : "°F"}`;

    weatherDayCard.appendChild(weatherDate);
    weatherDayCard.appendChild(weatherIcon);
    weatherDayCard.appendChild(weatherTemp);

    return weatherDayCard;
  }
  formatDate(dateString) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }
}

export { UIWeather };
