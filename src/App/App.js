import { useState, useEffect } from 'react';
import useCurrentLocation from '../Hooks/useCurrentLocation';
import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import WeatherAPI from '../Utils/api/WeatherAPI';
import Weather from '../Components/Weather/Weather';
import './App.css';

const App = () => {
  const {location, error} = useCurrentLocation();
  const [weatherData, setWeatherData] = useState();

  const {
    getGeoWeather,
  } = WeatherAPI();

  useEffect(() => {

    if (location) {
      (async () => {
        try {
          let response = await getGeoWeather(location);
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
    <article className="App">
      <Header />
      <Search />
      <Weather weatherData={weatherData} />
    </article>
  );
}

export default App;
