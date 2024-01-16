import React, { useState , useEffect} from 'react';
import './Lightbulb.scss';

interface LightbulbProps {
  duration: number;
  next: string;
  
}

const trafficTime: LightbulbProps = {
  duration: 4000,
  next: 
}

function RedLightbulb() {
    const[redlightbulb, setRedLightbulb] = useState(false);
    
  return (
    <>
      <div className='Lightbulb red'></div>
     
    </>
  
  )
}

export default RedLightbulb;