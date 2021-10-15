import { useState } from 'react';
import WeatherTop from './WeatherTop';
import Loading from '../Loading/Loading';
import { useEffect } from 'react';
import './weather.css';

const Weather = (props) => {
  const [weather, setWeather] = useState(props.weatherData);
  const {weatherData} = props;

  useEffect(() => {
    setWeather(weather);
  }, [weather])

  return (
    <main className="weather">
    {
      !weatherData ? <Loading /> : (
        <WeatherTop
          city={weatherData.name}
          country={weatherData.sys.country}
          weatherDescription={weatherData.weather[0].description}
          weatherMain={weatherData.weather[0].main}
          feelsLike={weatherData.main.feels_like}
          currTemp={weatherData.main.temp}
          minTemp={weatherData.main.temp_min}
          maxTemp={weatherData.main.temp_max}
          icon={weatherData.weather[0].icon}
        />
      )
    }
    </main>
  )
}

export default Weather;