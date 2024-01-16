import React from 'react';
import './App.scss';
import TrafficLightOG from './TrafficLightOG/TrafficLightOG';
import TrafficLightMain from './TrafficLightsMain/TrafficLightMain';
import Lightbulb from './Lightbulb/Lightbulb';
import TrafficLight from './TrafficLight/TrafficLight';
import TrafficLightOnClick from './TrafficLightsOnClick/TrafficLightsOnClick';
import Light from './Light/Light';
import { Lights } from './Light/Lights';

interface TrafficStates {
  [key: string]: {
    duration: number;
    backgroundColor: string;
    next: string;
  };
}

const trafficStates: TrafficStates = {
  red: {
    duration: 4000,
    backgroundColor: "red",
    next: "green"
  },
  yellow: {
    duration: 500,
    backgroundColor: "yellow",
    next: "red"
  },
  green: {
    duration: 3000,
    backgroundColor: "green",
    next: "yellow"
  },
}

function App() {
  return (
    <div className='trafficLightsPage'>
      <TrafficLightOG trafficStates={trafficStates}/>
      <TrafficLightOnClick trafficStates={trafficStates}/>
      <TrafficLight />
      <Light Lights={Light}/>
    </div>
  );
}

export default App;
