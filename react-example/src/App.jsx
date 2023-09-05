import useEntry from './networktables/useEntry';
import Mechanism2d, { useMechanism2dRoots } from './components/Mechanism2d';
import Logger from './components/Logger';
import Encoder from './components/Encoder';
import Examples from './examples/Examples';
import './App.css';

function App() {
  const [gyroAngle] = useEntry('/gyro/angle', 0);
  const mechanism2dRoots = useMechanism2dRoots('/SmartDashboard/Mech2d');

  return (
    <div className="App">
      <Examples />
      <Encoder speed={4} distance={20.5} />
      <Mechanism2d roots={mechanism2dRoots} />
      <Logger error={`angle: ${gyroAngle}`} />
    </div>
  );
}

export default App;
