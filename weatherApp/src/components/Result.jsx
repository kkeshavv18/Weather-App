import React from 'react'
import "./Result.css"

export const Result = ({weather}) => {
    
  return (
    <div className='result-container'>
        {
            weather.name !== undefined ? 
            <>
        <div>City Name: {weather.name}</div>
       <div>Country: {weather.sys.country}</div>
       <div>Temperature: {weather.main.temp} °C</div>
       <div>Description: {weather.weather[0].description}</div>
      
       <div>Humidity: {weather.main.humidity} %</div>
       <div>Wind Speed: {weather.wind.speed} Km/hr</div>
       <div>Min Temperature: {weather.main.temp_min}</div>
       <div>Max Temperature: {weather.main.temp_max}</div>
       <div className='weatherImg'><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt ='Weather Icon'/></div>
            </>
            :
            <h2>Please Enter the City Name</h2>
        }
      
       

    </div>
  )
}
