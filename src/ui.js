// This function takes the big 'data' object and injects it into the DOM
export function renderWeather(data) {
  const display = document.querySelector("#display");

  // Destructuring: Extracts specific keys from the API response
  // We go one level deeper to get temp and conditions from currentConditions
  const {
    address,
    description,
    currentConditions: { temp, conditions, humidity, windspeed, datetime },
  } = data;

  display.innerHTML = `
    <div class="weather-card">
      <div class="card-header">
        <h2>${address}</h2>
        <p class="time">Local Time: ${datetime}</p>
      </div>
      
      <div class="temp-section">
        <span class="main-temp">${Math.round(temp)}°F</span>
        <p class="condition-text">${conditions}</p>
      </div>

      <div class="card-footer">
        <p class="summary">${description}</p>
        <div class="stats-grid">
          <div class="stat-item">
            <span class="label">Humidity</span>
            <span class="value">${humidity}%</span>
          </div>
          <div class="stat-item">
            <span class="label">Wind</span>
            <span class="value">${Math.round(windspeed)} mph</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Shows a simple loading message while the fetch is in progress
export function showLoading() {
  const display = document.querySelector("#display");
  display.innerHTML = `
    <div class="status-container">
      <div class="loader"></div>
      <p>Fetching local data...</p>
    </div>
  `;
}

// Handles errors (like typos in city names)
export function showError(message) {
  const display = document.querySelector("#display");
  display.innerHTML = `
    <div class="error-card">
      <p>⚠️ Error: ${message}</p>
      <p>Please check the spelling and try again.</p>
    </div>
  `;
}

// Add this function to your src/ui.js
export function updateBackground(gifUrl) {
  if (gifUrl) {
    document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${gifUrl}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
  }
}
