import { useState, useEffect } from 'react';
import useCurrentLocation from '../Hooks/useCurrentLocation';
import Error from '../Components/Error/Error';
import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import WeatherAPI from '../Utils/api/WeatherAPI';
import Weather from '../Components/Weather/Weather';
import './App.css';

const App = () => {
  const {location} = useCurrentLocation();
  const [inputValue, setInputValue] = useState('');
  const [weatherData, setWeatherData] = useState();
  const [error, setError] = useState(null);

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
    event.preventDefault();

    try {
      let response = await getCityWeather(inputValue);
      if (response.cod === 200) {
        setWeatherData({
          ...response
        });
        setError(null);
      } else {
        setError({
          ...response
        })
      }
      
    } catch (error) {
      throw error;
    }
    setInputValue('');
  }

  return (
    <article className="App">
      <Header />
      <Search
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      {
        error ? <Error message={error.message} cod={error.cod} /> : 
                <Weather weatherData={weatherData} />
      }
    </article>
  );
}

export default App;
