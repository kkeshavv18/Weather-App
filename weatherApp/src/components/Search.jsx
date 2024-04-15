import React from 'react'
import "./Search.css"

export const Search = ({searchData,onSearchChange, searchWeather}) => {
  return (
    <div className='search-container'>
        <input type='search' className='search' value={searchData} onChange={(e)=>{onSearchChange(e.target.value)}}/>
        <button className='btn' onClick={searchWeather}>Search</button>
    </div>
  )
}
