import { useState } from 'react';

const WeatherAPI = () => {

  const getWeather = async (location) => {
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);

      let data = await response.json();

      if (data) {
        return data;
      }
    } catch (error) {
      throw error;
    }
  }

  return {
    getWeather,
  }
}

export default WeatherAPI;