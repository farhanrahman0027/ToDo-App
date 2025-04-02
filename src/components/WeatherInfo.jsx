import { useState, useEffect } from "react";
import axios from "axios";

function WeatherInfo() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&units=metric&appid=YOUR_API_KEY")
      .then(response => setWeather(response.data))
      .catch(error => console.error("Error fetching weather:", error));
  }, []);

  return (
    <div className="mb-4 p-4 bg-blue-100 rounded text-center w-full md:w-1/2 mx-auto">
      {weather ? (
        <p>
          {weather.name}: {weather.main.temp}°C, {weather.weather[0].description}
        </p>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}

export default WeatherInfo;
