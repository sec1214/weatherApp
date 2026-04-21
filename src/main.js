import { getWeatherData } from "./weatherData.js";
import { getWeatherGif } from "./giphy.js";
import {
  renderWeather,
  showLoading,
  showError,
  updateBackground,
} from "./ui.js";

const weatherForm = document.querySelector("#weather-form");
const input = document.querySelector("#city-input");

weatherForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = input.value.trim();
  if (!city) return;

  try {
    showLoading();

    // 1. Get the Weather Data
    const weatherData = await getWeatherData(city);

    // 2. Get the GIF based on the conditions (e.g., "Rain", "Clear")
    const gifUrl = await getWeatherGif(
      weatherData.currentConditions.conditions,
    );

    // 3. Update the UI
    updateBackground(gifUrl);
    renderWeather(weatherData);

    // 4. Final Polish
    input.value = "";
    input.blur();
  } catch (err) {
    showError(err.message);
  }
});
