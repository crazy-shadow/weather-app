import React from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherForm />
      <WeatherDisplay />
    </div>
  );
};

export default App;