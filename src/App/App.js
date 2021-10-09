import { useState, useEffect } from 'react';
import useCurrentLocation from '../Hooks/useCurrentLocation';
import WeatherAPI from '../Utils/api/WeatherAPI';
import Weather from '../Components/Weather/Weather';
import './App.css';

const App = () => {
  const {location, error} = useCurrentLocation();
  const [weatherData, setWeatherData] = useState();

  const {
    getWeather,
  } = WeatherAPI();

  useEffect(() => {

    if (location) {
      (async () => {
        try {
          let response = await getWeather(location);
          setWeatherData({
            ...response
          })
        } catch (error) {
          console.log(error);
        }
      })();
    }

  }, [location])

  return (
    <div className="App">
      <Weather weatherData={weatherData} />
    </div>
  );
}

export default App;
