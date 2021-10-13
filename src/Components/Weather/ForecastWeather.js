const ForecastWeather = (props) => {
  console.log(props.forecastWeather);
  return (
    <div className="forecastWeather">
      <p className="forecast-header">Next {props.forecastWeather.length} Days</p>
      <div className="forecast-cardList">
        {
          props.forecastWeather.map((weather, index) => {
            return (
              <div className="forecast-card" key={index}>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
                <p>{weather.temp.min} - {weather.temp.max}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ForecastWeather;