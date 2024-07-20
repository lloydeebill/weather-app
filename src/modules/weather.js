class Weather {
  constructor() {
    this.weatherData = null;
  }

  async fetchWeather(location) {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=5d1aa864e5a04bd48ed143546241807&q=${location}`,
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
}

export { Weather };
