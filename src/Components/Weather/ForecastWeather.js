import TempIcon from './TempIcon';

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
                <p className="day">
                  {
                    new Date(weather.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }).substring(0, 3)
                  }
                </p>
                <TempIcon
                  temp={`${Math.round(`${weather.temp.min}`)} - ${Math.round(`${weather.temp.max}`)}`}
                  icon={weather.weather[0].icon}
                  unix={weather.dt}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ForecastWeather;