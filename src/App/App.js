import { useState, useEffect } from 'react';
import useCurrentLocation from '../Hooks/useCurrentLocation';
import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import WeatherAPI from '../Utils/api/WeatherAPI';
import Weather from '../Components/Weather/Weather';
import './App.css';

const App = () => {
  const {location, error} = useCurrentLocation();
  const [inputValue, setInputValue] = useState('');
  const [weatherData, setWeatherData] = useState();

  const {
    getGeoWeather,
    getCityWeather
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

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = async (event) => {
    console.log(inputValue);
    event.preventDefault();

    try {
      let response = await getCityWeather(inputValue);
      if (response) {
        setWeatherData({
          ...response
        });
      }
      
    } catch (error) {
      throw error;
    }
  }

  return (
    <article className="App">
      <Header />
      <Search
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <Weather weatherData={weatherData} />
    </article>
  );
}

export default App;
