import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { fetchWeather } from '../store/weatherSlice';

const WeatherForm: React.FC = () => {
  const [location, setLocation] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchWeather(location));
  };

  return (
    <form onSubmit={handleSubmit} className="weather-form">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;