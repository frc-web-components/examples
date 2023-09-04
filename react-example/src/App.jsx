import { useState } from 'react';
import KeyValueTable from './components/KeyValueTable';
import useGlobalListener from './networktables/useGlobalListener';
import useEntry from './networktables/useEntry';
import Gyro from './components/Gyro';
import Mechanism2d, { useMechanism2dRoots } from './components/Mechanism2d';
import Logger from './components/Logger';
import Encoder from './components/Encoder';
import Field, { FieldPath, FieldRobot } from './components/Field';
import './App.css';

function App() {
  const [tableEntries, setTableEntries] = useState({});
  useGlobalListener((key, value) => {
    setTableEntries(previousValue => ({
      ...previousValue,
      [key]: value,
    }));
  }, true);

  const [robotPose] = useEntry('/SmartDashboard/Field/Robot', []);
  const [trajectory] = useEntry('/SmartDashboard/Field/trajectory', []);
  const [gyroAngle, setGyroAngle] = useEntry('/gyro/angle', 0);
  const [gyroPrecision] = useEntry('/gyro/precision', 2);
  const mechanism2dRoots = useMechanism2dRoots('/SmartDashboard/Mech2d');

  return (
    <div className="App">
      <Field origin="red" rotationUnit="deg">
        <FieldRobot pose={robotPose}></FieldRobot>
        <FieldPath poses={trajectory}></FieldPath>
      </Field>
      <Gyro value={gyroAngle} precision={gyroPrecision} />
      <Encoder speed={4} distance={20.5} />
      <Mechanism2d roots={mechanism2dRoots} />
      <Logger error={`angle: ${gyroAngle}`} />
      <div className="gyro-input" >
        <label>Gyro Angle:</label>
        <input
          type="range"
          min="-360"
          max="360"
          value={gyroAngle}
          onChange={ev => setGyroAngle(parseFloat(ev.target.value))}
        />
      </div>
      <KeyValueTable keyValuePairs={tableEntries} />
    </div>
  );
}

export default App;
