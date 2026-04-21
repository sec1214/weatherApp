// src/giphy.js
export async function getWeatherGif(condition) {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
  // We add 'weather' to the search term to get better results
  const searchTerm = `${condition} weather`;
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // Giphy 'translate' returns a single object
    return data.data.images.original.url;
  } catch (err) {
    console.error("Giphy error:", err);
    return ""; // Fallback to no background
  }
}
