import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const WeatherDisplay: React.FC = () => {
  const { data, status, error } = useSelector((state: RootState) => state.weather);
  const { name, clouds, coord, sys, weather, wind } = data || {};

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="weather-display">
      {data && (
        <>
          <div className='weather-item'>
            <b>Location:&nbsp;</b>
            <p>{name + ', ' + sys.country}</p>
            <p>{`(longitude: ${coord.lon}, latitude: ${coord.lat})`}</p>
          </div>
          <div className='weather-item'>
            <b>Clouds:&nbsp;</b>
            <p>{`${clouds.all}%`}</p>
          </div>
          <div className='weather-item'>
            <b>Wind:&nbsp;</b>
            <p>{`${wind.deg} deg,`}&nbsp;</p>
            <p>{`${wind.speed} m/s`}</p>
          </div>
          <div className='weather-item'>
            <b>Weather:&nbsp;</b>
            <p>{`${weather[0].description}`}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherDisplay;