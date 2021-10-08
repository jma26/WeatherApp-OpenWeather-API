import { useState, useEffect } from 'react';
import useCurrentLocation from '../Hooks/useCurrentLocation';
import WeatherAPI from '../Utils/api/WeatherAPI';
import './App.css';

const App = () => {
  const {location, error} = useCurrentLocation();
  const [weatherList, setWeatherList] = useState();

  useEffect(() => {
    if (location) {
      const getWeather = async () => {
        try {
          let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`, {
            headers: {
              'Accept': 'application/json',
            }
          });

          if (response) {
            setWeatherList({
              ...response
            });
          }
        } catch (error) {
          console.log(error);
        }
      }

      getWeather();
    }
  }, [location])

  return (
    <div className="App">
    </div>
  );
}

export default App;
