const WeatherTop = (props) => {
  const {
    city,
    currTemp,
    country,
    feelsLike,
    icon,
    minTemp,
    maxTemp,
    weatherMain,
    weatherDescription,
  } = props;

  return (
    <div className="weatherTop">
      <h2 className="date">{city}, {country}</h2>
      <div className="temp-container">
        <h3 className="current-temp">{currTemp} &#176;C</h3>
        <p className="min-temp">
          {minTemp} &#176;C
          <span>Min</span>
        </p>
        <p className="max-temp">
          {maxTemp} &#176;C
          <span>Max</span>
        </p>
        <p className="feelslike-temp">Feels like {feelsLike} &#176;C</p>
      </div>
      <div className="description-container">
        <h3 className="main">{weatherMain}</h3>
        <p className="description">{weatherDescription}</p>
      </div>
      <div className="icon-container">
        <img
          className="icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={weatherDescription}
        />
      </div>
    </div>
  )
}

export default WeatherTop;