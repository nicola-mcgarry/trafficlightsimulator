import React, { useState , useEffect} from 'react';
import './Light.scss';
import { Lights } from './Lights';

interface LightProps {
    lightType: string; // Add a prop to specify the light type (Red, Amber, Green)
  }

const Light: React.FC<LightProps> = (props) => {
    const lightConfig = Lights.find((light) => light.type === props.lightType);

    if (!lightConfig) {
        console.error(`Invalid light type: ${props.lightType}`);
        return null;
      }

    const [light, setLight] = useState(false);

    useEffect(() => {
      setLight(true);
  
      const timerId = setTimeout(() => {
        setLight(false);
      }, lightConfig.duration);
  
      return () => clearTimeout(timerId);
    }, [lightConfig.duration, lightConfig.nextColour, lightConfig.colour]);
  
  return (
    <>
       <div
      className={`Light ${light ? 'active' : ''}`}
      style={{ backgroundColor: light ? lightConfig.colour : lightConfig.nextColour }}
    ></div>
    </>
  
  )
}

export default Light;