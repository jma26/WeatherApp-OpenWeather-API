import './weather.css';

const CurrentWeather = (props) => {
  const {currentWeather} = props;

  return (
    <div className="currentWeather">
      <img
        className="currentWeather-icon"
        src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
        alt={currentWeather.weather[0].description}
      />
      <div className="currentWeather-info-container">
        <p className="currentWeather-temp">{Math.round(`${currentWeather.temp}`)} &#176;</p>
        <p className="currentWeather-description">{currentWeather.weather[0].description}</p>
      </div>
    </div>
  )
}

export default CurrentWeather;