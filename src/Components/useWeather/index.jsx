import { useEffect, useState } from 'react';

const useWeather = ()=>{
  const apikey1 = '85ad506aba6228a1c0deae3e61aac8ae';
  const apikey2 = '5f81d4515463e0c25e95b37dd75dc8d1';

  
  const [data, setData] =useState({});
  const [city, setCity ] = useState('');
  const [sincronized, setSincronized] = useState(false);


  useEffect(()=>{
    if(city.length>0){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey1}&units=imperial`)
        .then(data => data.json())
        .then(resp=>{
          setData(resp)
          console.log("data city",resp);
        })
        .catch(err=> console.log(err))
      setSincronized(true)
      
    }else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let latitud = position.coords.latitude;
        let longitud = position.coords.longitude;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apikey1}&units=imperial&lang=es`)
        .then(data => data.json())
        .then(resp=>{setData(resp)
          console.log('navigator data by john',resp);
        })
        .catch(err=> console.log(err))

        setSincronized(true)
      
      });
    } else {
      console.log("La geolocalización no es compatible en este navegador.");
      setSincronized(true)

    }
   
  },[sincronized])

  


return {
  data,
  city,
  setCity,
  setSincronized
}
}

export {useWeather}