import React, { useState , useEffect} from 'react';
import './Lightbulb.scss';

function DefaultBulb() {
    const[defaulttbulb, setDefaultbulb] = useState(false);
    
  return (
    <>
      <div className='Lightbulb'></div>
     
    </>
  
  )
}

export default DefaultBulb;