(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();async function e(e){let t=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?unitGroup=us&key=G44HEUU9Y66JHNZYTLXMS8L5M&contentType=json`;try{let e=await fetch(t);if(!e.ok)throw Error(`Location not found`);return await e.json()}catch(e){throw console.error(e),e}}async function t(e){let t=`https://api.giphy.com/v1/gifs/translate?api_key=ks6JGm0YIe7EVZKura3TLnZK3LfUlc4i&s=${`${e} weather`}`;try{return(await(await fetch(t)).json()).data.images.original.url}catch(e){return console.error(`Giphy error:`,e),``}}function n(e){let t=document.querySelector(`#display`),{address:n,description:r,currentConditions:{temp:i,conditions:a,humidity:o,windspeed:s,datetime:c}}=e;t.innerHTML=`
    <div class="weather-card">
      <div class="card-header">
        <h2>${n}</h2>
        <p class="time">Local Time: ${c}</p>
      </div>
      
      <div class="temp-section">
        <span class="main-temp">${Math.round(i)}°F</span>
        <p class="condition-text">${a}</p>
      </div>

      <div class="card-footer">
        <p class="summary">${r}</p>
        <div class="stats-grid">
          <div class="stat-item">
            <span class="label">Humidity</span>
            <span class="value">${o}%</span>
          </div>
          <div class="stat-item">
            <span class="label">Wind</span>
            <span class="value">${Math.round(s)} mph</span>
          </div>
        </div>
      </div>
    </div>
  `}function r(){let e=document.querySelector(`#display`);e.innerHTML=`
    <div class="status-container">
      <div class="loader"></div>
      <p>Fetching local data...</p>
    </div>
  `}function i(e){let t=document.querySelector(`#display`);t.innerHTML=`
    <div class="error-card">
      <p>⚠️ Error: ${e}</p>
      <p>Please check the spelling and try again.</p>
    </div>
  `}function a(e){e&&(document.body.style.backgroundImage=`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${e}')`,document.body.style.backgroundSize=`cover`,document.body.style.backgroundPosition=`center`,document.body.style.backgroundAttachment=`fixed`)}var o=document.querySelector(`#weather-form`),s=document.querySelector(`#city-input`);o.addEventListener(`submit`,async o=>{o.preventDefault();let c=s.value.trim();if(c)try{r();let i=await e(c);a(await t(i.currentConditions.conditions)),n(i),s.value=``,s.blur()}catch(e){i(e.message)}});