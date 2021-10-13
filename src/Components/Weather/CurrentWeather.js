import TempIcon from './TempIcon';
import './weather.css';

const CurrentWeather = (props) => {
  const {currentWeather} = props;

  return (
    <div className="currentWeather">
      <TempIcon
        icon={currentWeather.weather[0].icon}
        description={currentWeather.weather[0].description}
        temp={Math.round(`${currentWeather.temp}`)}
      />
    </div>
  )
}

export default CurrentWeather;