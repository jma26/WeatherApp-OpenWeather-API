import { useState } from 'react';

const WeatherAPI = () => {

  const getWeather = async (location) => {
    // console.log(location);
    // try {
    //   let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`, {
    //     headers: {
    //       'Accept': 'application/json',
    //     }
    //   });

    //   if (response) {
    //     return response.json();
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
  }

  return {
    getWeather,
  }
}

export default WeatherAPI;