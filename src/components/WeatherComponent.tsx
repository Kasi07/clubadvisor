import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface WeatherData {
    name: string;
    main: {
      temp: number;
    };
    weather: [
      {
        description: string;
        icon: string;
      }
    ];
  }

  function WeatherComponent() {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=Mannheim&appid=cbf6c073a16ae38968d8449784bf9735`
        );
        setWeatherData(result.data);
      };
      fetchData();
    }, []);
  
    return (
      <div style={{ width: '200px', background: '#f0f0f0', borderRadius: '10px', padding: '20px', fontFamily: 'Arial', marginLeft: '50px'}}>
        {weatherData && (
          <>
            <h2>{weatherData.name}</h2>
            <h3>{Math.round(weatherData.main.temp - 273.15)}°C</h3>
            <p>{weatherData.weather[0].description}</p>
            <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather status icon" />
          </>
        )}
      </div>
    );
  }

export default WeatherComponent;