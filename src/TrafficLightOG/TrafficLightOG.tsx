import React, {useState, useEffect} from 'react';
import './TrafficLightOG.scss';

interface TrafficLightProps  {
  trafficStates: Record<string, {duration: number, backgroundColor: string, next: string}>;
}

const TrafficLightOG: React.FC<TrafficLightProps> = ({trafficStates}) => {
  const [currentColor, setCurrentColor] = useState<string>("green");

  useEffect(() => {
    const { duration, next } = trafficStates[currentColor];

    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor, trafficStates]);

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

export default TrafficLightOG;

