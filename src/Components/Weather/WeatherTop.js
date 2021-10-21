import { useState, useEffect } from 'react';

const WeatherTop = (props) => {
  const {
    city,
    currTemp,
    country,
    feelsLikeTemp,
    icon,
    minTemp,
    maxTemp,
    weatherMain,
    weatherDescription,
  } = props;

  const [measurement, setMeasurement] = useState('Metric');
  const [boolean, setBoolean] = useState(true);
  const [temperature, setTemperature] = useState({
    currTemp,
    minTemp,
    maxTemp,
    feelsLikeTemp
  });
  
  useEffect(() => {
    if (boolean) {
      setMeasurement('Metric');
    } else {
      setMeasurement('Imperial');
    }
    temperatureConversion();
  }, [boolean])

  const temperatureConversion = () => {
    let tempObj = {
      currTemp,
      minTemp,
      maxTemp,
      feelsLikeTemp
    };
    for (let property in tempObj) {
      // If true -> Metric
      if (boolean) {
        tempObj[property] = Math.round(tempObj[property] - 273.15)
      // False -> Imperial
      } else {
        tempObj[property] = Math.round((tempObj[property] - 273.15) * 1.8 + 32);
      }
    }
    console.log(tempObj);
    setTemperature(tempObj);
  }
  
  return (
    <div className="weatherTop">
      <h2 className="date">{city}, {country}</h2>
      <button 
        className="metric__toggle--btn"
        aria-label="Toggle Imperial and Metric systems"
        onClick={() => setBoolean(!boolean)}
      >
        {measurement}
      </button>
      <div className="temp-container">
        <h3 className="current-temp">{temperature.currTemp} &#176;{boolean ? 'C': 'F'}</h3>
        <p className="min-temp">
          {temperature.minTemp} &#176;{boolean ? 'C': 'F'}
          <span>Min</span>
        </p>
        <p className="max-temp">
          {temperature.maxTemp} &#176;{boolean ? 'C': 'F'}
          <span>Max</span>
        </p>
        <p className="feelslike-temp">Feels like {temperature.feelsLikeTemp} &#176;{boolean ? 'C': 'F'}</p>
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