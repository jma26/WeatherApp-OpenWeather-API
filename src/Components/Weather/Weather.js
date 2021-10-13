import { useState } from 'react';
import Header from '../Header/Header';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';
import Loading from '../Loading/Loading';
import { useEffect } from 'react';

const Weather = (props) => {
  const [weather, setWeather] = useState(props.weatherData);
  const {weatherData} = props;

  useEffect(() => {
    setWeather(weather);
  }, [weather])

  return (
    <>
    {
      !weatherData ? <Loading /> : (
        <div className="weather">
          <Header
            timezone={weatherData.timezone}
            date={weatherData.current.dt}
            offset={weatherData.timezone_offset}
          />
          <CurrentWeather currentWeather={weatherData.current} />
          <ForecastWeather forecastWeather={weatherData.daily} />
        </div>
      )
    }
    </>
  )
}

export default Weather;