// src/weatherData.js

export async function getWeatherData(city) {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${apiKey}&contentType=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Location not found");
    return await response.json(); // Just return the data
  } catch (err) {
    console.error(err);
    throw err; // Send the error back to the boss (main.js)
  }
}
