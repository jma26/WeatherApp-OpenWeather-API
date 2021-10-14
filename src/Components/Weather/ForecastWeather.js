import TempIcon from './TempIcon';
import WeatherInfo from './WeatherInfo';

const ForecastWeather = (props) => {
  console.log(props.forecastWeather);
  console.log(new Date(props.forecastWeather[0].dt * 1000).toLocaleDateString('en-US'));
  return (
    <div className="forecastWeather">
      <p className="forecast-header">Next {props.forecastWeather.length} Days</p>
      <div className="forecast-cardList">
        {
          props.forecastWeather.map((weather, index) => {
            return (
              <div className="forecast-card" key={index}>
                <div className="date-container">
                  <p className="day">
                    {
                      new Date(weather.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }).substring(0, 3)
                    }
                  </p>
                  <p className="date">
                    {
                      new Date(weather.dt * 1000).toLocaleDateString('en-US').substring(0, 5)
                    }
                  </p>
                </div>
                <TempIcon
                  temp={`${Math.round(`${weather.temp.min}`)} - ${Math.round(`${weather.temp.max}`)}`}
                  icon={weather.weather[0].icon}
                  unix={weather.dt}
                  description={weather.weather[0].description}
                />
                <WeatherInfo
                  wind={Math.round(`${weather.wind_speed}`)}
                  min={Math.round(`${weather.temp.min}`)}
                  max={Math.round(`${weather.temp.max}`)}
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