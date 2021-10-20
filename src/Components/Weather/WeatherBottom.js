const WeatherBottom = (props) => {
  const {
    humidity,
    pressure,
    timezone,
    wind,
    sunrise,
    sunset
  } = props;

  const sunriseTime = new Date((sunrise * 1000) - timezone).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});

  const sunsetTime = new Date((sunset * 1000) - timezone).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})

  const windSpeed = (wind * 3.6).toFixed(2);

  return (
    <div className="weatherBottom">
      <p className="sunrise weather-info">Sunrise <span>{sunriseTime}</span></p>
      <p className="sunset weather-info">Sunset <span>{sunsetTime}</span></p>
      <p className="wind weather-info">Wind <span>{windSpeed} km/hour</span></p>
      <p className="pressure weather-info">Pressure <span>{pressure} hPA</span></p>
      <p className="humidity weather-info">Humidity <span>{humidity} %</span></p>
    </div>
  )
}

export default WeatherBottom;