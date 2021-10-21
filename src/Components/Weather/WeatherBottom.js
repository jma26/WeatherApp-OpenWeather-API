import { useState, useEffect } from 'react';

const WeatherBottom = (props) => {
  const {
    humidity,
    pressure,
    timezone,
    wind,
    sunrise,
    sunset,
    boolean,
  } = props;

  const [windSpeed, setWindSpeed] = useState(wind);

  useEffect(() => {
    windSpeedConversion();
  }, [boolean])

  const windSpeedConversion = () => {
    var tempWind;
    if (boolean) {
      tempWind = (wind * 3.6).toFixed(2);
    } else {
      tempWind = (wind * 2.2369).toFixed(2);
    }
    setWindSpeed(tempWind);
  }

  const sunriseTime = new Date((sunrise * 1000) - timezone).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});

  const sunsetTime = new Date((sunset * 1000) - timezone).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})

  return (
    <div className="weatherBottom">
      <p className="sunrise weather-info">Sunrise <span>{sunriseTime}</span></p>
      <p className="sunset weather-info">Sunset <span>{sunsetTime}</span></p>
      <p className="wind weather-info">Wind <span>{windSpeed} {boolean ? 'km/h' : 'mph'}</span></p>
      <p className="pressure weather-info">Pressure <span>{pressure} hPA</span></p>
      <p className="humidity weather-info">Humidity <span>{humidity} %</span></p>
    </div>
  )
}

export default WeatherBottom;