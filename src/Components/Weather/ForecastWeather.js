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
                <p className="forecast-day">
                  {
                    new Date(weather.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }).substring(0, 3)
                  }
                </p>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
                <p className="forecast-temp-range">{Math.round(`${weather.temp.min}`)}&#176; - {Math.round(`${weather.temp.max}`)}&#176;</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ForecastWeather;