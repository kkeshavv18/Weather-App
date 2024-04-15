
import { useState } from 'react'
import './App.css'
import { Result } from './components/Result'
import { Search } from './components/Search'



function App() {
  const [search,setSearch] = useState("")
  const [weatherData, setWeatherData] = useState({})



  function handleSearchChange(city){
    setSearch(city)
  
  }

  function searchWeatherHandler(){
  

    if(search !== ""){
  let API_KEY = "29eb46e8a2f6bfd89e54c9d26c4cec03"
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}` 

  fetch(url)
  .then((res)=>res.json())
  .then((data)=>setWeatherData(data)) 
}
  
  }
 
  return (
    <div className='main-container'>
      <div className='card'>
      <Search searchData={search} onSearchChange={handleSearchChange} searchWeather={searchWeatherHandler}/>
    <Result weather = {weatherData}/>
      </div>
  
    </div>
  )
}

export default App
