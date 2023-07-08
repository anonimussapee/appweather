import { useState } from 'react'
import clearSky from '../../assets/iconos/1.svg'
import fewClouds from '../../assets/iconos/2.svg'
import scatteredClouds from '../../assets/iconos/3.svg'
import brokenClouds from '../../assets/iconos/4.svg'
import showerRain from '../../assets/iconos/5.svg'
import rain from '../../assets/iconos/6.svg'
import snow from '../../assets/iconos/7.svg'
import mist from '../../assets/iconos/8.svg'
import thunderStorm from '../../assets/iconos/9.svg'
import './card.css'

const CardWeather = ({data,tempType }) => {
 
 

  const statesWeather = {
    '01d':clearSky,
    '01n':clearSky,
    '02d':fewClouds,
    '02n':fewClouds,
    '03d':scatteredClouds,
    '03n':scatteredClouds,
    '04d': brokenClouds,
    '04n': brokenClouds,
    '09d':showerRain ,
    '09n':showerRain ,
    '10d':rain ,
    '10n':rain ,
    '11d':thunderStorm ,
    '11n':thunderStorm ,
    '13d':snow,
    '13n':snow ,
    '50d':mist,
    '50n':mist ,
    }
    const weather =  data.weather;
if(weather){
  
  const temps = {f:data.main.temp,c:(data.main.temp - 32)* 5/9}
   let tempRender = tempType.f ? 'f': 'c'

  return (
    <div className='card-weather gap-4 w-[90%]  min-w-[280px]  max-w-[400px] h-[280px] p-8 '>
      <p className='text-[7rem] sm:text-[4rem] temp-grades'>{(temps[tempRender]).toFixed(0)}°{tempRender.toUpperCase()}</p>
      <div className='img-weather-container  w-[197px] h-[195px] sm:w-[150px] sm:h-[150px]'>
        <img className='img-weather ' src={statesWeather[weather[0].icon]} alt="imagen del clima" />
      </div>
     
      <div className='text-[1.7rem] flex flex-col justify-end'>
        <p>{weather[0].main}</p>
        <p>Humedad: {data.main.humidity}%</p>
        <p>Presión: {data.main.pressure}</p>
      </div>
      <p className='text-[2.5rem] font-bold'>{data.name}</p>
      <p className='text-[2.5rem] font-bold text-center'>{weather[0].description}</p>
    </div>
  )
}else if(weather===undefined){

  return (
    <div className='w-[300px] h-[250px] rounded-full bg-[var(--primary-color)] flex flex-col justify-center items-center'>
      <h2 className='text-[2rem]'>Error escribe el nombre de la ciudad correctamente</h2>
    </div>
    );
}
  
}

export {CardWeather}