import { useState, useEffect } from 'react';
import WeatherAPI from '../../Utils/api/WeatherAPI';
import './search.css';

const Search = () => {
  const [inputValue, setInputValue] = useState('');

  const {
    getCityWeather,
  } = WeatherAPI();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let response = await getCityWeather(inputValue);
      console.log(response);
    } catch (error) {
      throw error;
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search by City"
        onChange={handleInputChange}
        value={inputValue}
      />
    </form>
  );
}

export default Search;