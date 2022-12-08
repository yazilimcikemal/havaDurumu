import React,{useEffect} from 'react'
import {usePosition} from 'use-position';
import axios from 'axios'

import './App.css';
export const getPost = (funcParamURL) => {
  return axios.get(`${funcParamURL}`);
}


function App() {



  const {latitude,longitude,} = usePosition();

  const getWeatherDate=async( lat, lon)=>{
    const key=process.env.REACT_APP_WEATHER_DATA
    var data= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    console.log(data)
  
   }

 
  
   
    
  useEffect(()=>{
   
    latitude && longitude && getWeatherDate(latitude,longitude)
    },[latitude,longitude]);
     

  return (
    <div className="App" >
      <h1>hava durumu uygulaması</h1>
      <h3>enleminiz:{latitude}</h3>
      <h3>boylamınız:{longitude}</h3>
      <h1>{}</h1>
    
      
    </div>
  );
}

export default App;
