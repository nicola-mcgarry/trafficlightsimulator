import React, {useState, useEffect} from 'react';
import './TrafficLightMain.scss';

interface TrafficLightProps  {
  trafficStates: Record<string, {duration: number, backgroundColor: string, next: string}>;
}

const TrafficLightMain: React.FC<TrafficLightProps> = ({trafficStates}) => {
 const [currentColor, setCurrentColor] = useState<string>("green");


  return (
      <div className="trafficLights">
      {Object.keys(trafficStates).map((color) => (
        <div
          key={color}
          className="light"
          style={{
            backgroundColor:
              color === currentColor ?  trafficStates[color].backgroundColor:undefined,
          }}
        />
      ))}
      </div>
 
    
  );
}

export default TrafficLightMain;

