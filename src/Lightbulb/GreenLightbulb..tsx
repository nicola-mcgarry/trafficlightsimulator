import React, { useState , useEffect} from 'react';
import './Lightbulb.scss';

function GreenLightbulb() {
    const[greenlightbulb, setGreenLightbulb] = useState(false);
    
  return (
    <>
      <div className='Lightbulb green'></div>
     
    </>
  
  )
}

export default GreenLightbulb;