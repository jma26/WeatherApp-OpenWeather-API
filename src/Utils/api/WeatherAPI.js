const WeatherAPI = () => {

  const getGeoWeather = async (location) => {
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);

      let data = await response.json();

      if (data) {
        return data;
      }
    } catch (error) {
      throw error;
    }
  }

  const getCityWeather = async (city) => {
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`)

      let data = await response.json();

      if (data) {
        return data;
      } 
    } catch (error) {
      throw error;
    }
  }

  return {
    getGeoWeather,
    getCityWeather,
  }
}

export default WeatherAPI;