import React, { useState , useEffect} from 'react';
import './Lightbulb.scss';
import RedLightbulb from './RedLightBulb';
import AmberLightbulb from './AmberLightBulb';

function RedAmberBulbs() {
    const[redlightbulb, setRedLightbulb] = useState(false);    
    const[amberlightbulb, setAmberLightbulb] = useState(false);

  return (
    <>
      <RedLightbulb/> 
      <AmberLightbulb />      
    </>
  
  )
}

export default RedAmberBulbs;