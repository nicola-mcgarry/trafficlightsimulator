import React, { useState , useEffect} from 'react';
import './TrafficLight.scss';
import GreenLightbulb from '../Lightbulb/GreenLightbulb.';
import AmberLightbulb from '../Lightbulb/AmberLightBulb';
import RedLightbulb from '../Lightbulb/RedLightBulb';
import DefaultBulb from '../Lightbulb/DefaultBulb';

function TrafficLight() {
    const[lightbulb, setLightbulb] = useState(false);
    
  return (
    <>
      <div className='trafficLights'>
        <RedLightbulb/> 
        <AmberLightbulb /> 
        <GreenLightbulb/>
        
      </div>
      <div className='trafficLights'>
      <DefaultBulb />
      </div>
     
    </>
  
  )
}

export default TrafficLight;