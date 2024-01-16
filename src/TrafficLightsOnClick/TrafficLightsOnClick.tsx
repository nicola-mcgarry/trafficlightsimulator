import React, {useState} from 'react';
import './TrafficLightsOnClick.scss';

interface TrafficLightProps  {
  trafficStates: Record<string, {duration: number, backgroundColor: string, next: string}>;
}

const TrafficLightOnClick: React.FC<TrafficLightProps> = ({trafficStates}) => {
  const [currentColor, setCurrentColor] = useState<string>("green");

  const handleColorChange = () => {
    const { next } = trafficStates[currentColor];
    setCurrentColor(next);
  };
  
  return (
    <div className='OnClickLights'>

      <div className="trafficLightsOnClick">
      {Object.keys(trafficStates).map((color) => (
        <div
          key={color}
          className="light"
          style={{
            backgroundColor:
              color === currentColor ? trafficStates[color].backgroundColor : undefined,
          }}
        />
      ))}
      </div>
      <button onClick={handleColorChange}>Change Color</button>
    </div>
    
  );
}

export default TrafficLightOnClick;