import { useState } from 'react';
import WeatherTop from './WeatherTop';
import WeatherBottom from './WeatherBottom';
import Loading from '../Loading/Loading';
import './weather.css';

const Weather = (props) => {
  const {weatherData} = props;
  const [measurement, setMeasurement] = useState('Metric');
  const [boolean, setBoolean] = useState(true);

  const toggleBoolean = (bool) => {
    if (bool) {
      setMeasurement('Metric');
    } else {
      setMeasurement('Imperial');
    }
    setBoolean(bool)
  }

  return (
    <main className="weather">
    {
      !weatherData ? <Loading /> : (
        <>
          <WeatherTop
            city={weatherData.name}
            country={weatherData.sys.country}
            weatherDescription={weatherData.weather[0].description}
            weatherMain={weatherData.weather[0].main}
            feelsLikeTemp={weatherData.main.feels_like}
            currTemp={weatherData.main.temp}
            minTemp={weatherData.main.temp_min}
            maxTemp={weatherData.main.temp_max}
            icon={weatherData.weather[0].icon}
            measurement={measurement}
            boolean={boolean}
            onToggle={toggleBoolean}
          />
          <WeatherBottom
            humidity={weatherData.main.humidity}
            pressure={weatherData.main.pressure}
            wind={weatherData.wind.speed}
            sunrise={weatherData.sys.sunrise}
            sunset={weatherData.sys.sunset}
            timezone={weatherData.timezone}
            boolean={boolean}
            onToggle={toggleBoolean}
          />
        </>
      )
    }
    </main>
  )
}

export default Weather;