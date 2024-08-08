import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Textfield({ updateWeatherInfo }) {
  const [city, setCity] = useState("");
  const [setError] = useState(null);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "Enter  your API KEY";

  const getWeatherInfo = async (city) => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonResponse = await response.json();
      console.log(jsonResponse);

      const weatherDetails = {
        city: city,
        temp: jsonResponse.main.temp,
        temp_min: jsonResponse.main.temp_min,
        temp_max: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        description: jsonResponse.weather[0].description
      };
      console.log(weatherDetails); // Log weather details to console

      // Update weather info in the App component
      updateWeatherInfo(weatherDetails);
    } catch (error) {
      console.error(error.message); // Log error to console
      setError(error.message);
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getWeatherInfo(city);
    setCity(""); // Clear the text field after submission
  };

  return (
    <div>
      <h1>Search for the weather</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField
          id="City"
          label="City name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          style={{ marginTop: '16px' }}
        >
          Search
        </Button>
      </form>Hello
    </div>
  );
}
