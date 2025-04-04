import { useState, useEffect } from "react";
import axios from "axios";

function WeatherInfo() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        setWeather(response.data);
      } catch (error) {
        setError("Failed to load weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="mb-4 p-4 bg-blue-100 rounded text-center">
      {loading ? (
        <p>Loading weather...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p>
          🌤 {weather.name}: {weather.main.temp}°C, {weather.weather[0].description}
        </p>
      )}
    </div>
  );
}

export default WeatherInfo;
