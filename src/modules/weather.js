class Weather {
  constructor() {
    this.weatherData = null;
  }

  async fetchWeather() {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=5d1aa864e5a04bd48ed143546241807&q=$butuan`,
        {
          mode: "cors",
        },
      );
      if (!response.ok) {
        throw new Error("Could not fetch source");
      }
      this.weatherData = await response.json();
      return this.weatherData;
    } catch (error) {
      console.error(error);
    }
  }

  todayWeather(unit) {
    const weatherTitle = document.querySelector(".weather-title");
    weatherTitle.innerText = `${this.weatherData.current.condition.text}`;

    const weatherLocation = document.querySelector(".weather-location");
    weatherLocation.innerText = `${this.weatherData.location.name}`;

    let tempUnit = unit === "metric" ? "°C" : "°F";
    let tempValue =
      unit === "metric"
        ? this.weatherData.current.temp_c
        : this.weatherData.current.temp_f;

    const weatherTemp = document.querySelector(".weather-temp");
    weatherTemp.innerText = `${tempValue} ${tempUnit}`;
  }
}

export { Weather };
