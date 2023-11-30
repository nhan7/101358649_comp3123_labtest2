import WeatherCss from './css/WeatherCss.css'
import SearchBar from './components/SearchBar'; 
import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const api_key = 'b217a2da28173777605b00225f071705'
  const [WeatherData, setWeatherData] =useState('')
  const fetchWeatherData = async(cityData)=>{
    try{
        const fetch = await axios.get( 
          `http://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=${api_key}&units=metric`
          )
          setWeatherData(fetch.data)
    }catch(error){
        console.error("error has occurred", error)
    }
  }
  const convertTimeStamp = (timestamp) => {
    const date = new Date(timestamp * 1000); 
    return date.toLocaleString('en-US', {day:'numeric',month:'short',year:'numeric',weekday:'long'}); 
  };

  const getIcon = (icon) =>{
    return `https://openweathermap.org/img/wn/${icon}@2x.png`
  }



  const handleSearch = (cityData) =>{
    fetchWeatherData(cityData)
  }
  return (
    <div class="app-container">
      <h1 class="title">Weather Forecast</h1>
      <SearchBar onSearch={handleSearch}/>



      {WeatherData && (
        <div class="weather-container">
          
          <h2   class="text"> HUMIDITY: {WeatherData.main.humidity}%</h2 >
          <h2   class="text"> AIR PRESSURE: {WeatherData.main.pressure} mb</h2 >

          <h2   class="text"> MIN TEMP: {WeatherData.main.temp_min}°C</h2 >
          <h2   class="text">MAX TEMP: {WeatherData.main.temp_max}°C</h2 >
          <div class="main-info">


            <h1  class="text">{convertTimeStamp(WeatherData.dt)}</h1>
            <h1 class="text">{WeatherData.name}</h1>
            <h1  class="big-text">{WeatherData.main.temp}°C</h1>

            <img src={getIcon(WeatherData.weather[0].icon)} alt={WeatherData.weather[0].description}/>
          </div>






        </div>
      )}

    </div>
  );
}

export default App;



