import { useState } from 'react';
import KeyValueTable from './components/KeyValueTable';
import useGlobalListener from './networktables/useGlobalListener';
import NetworkTables from './networktables/networktables';
import useEntry from './networktables/useEntry';

window.NetworkTables = NetworkTables;

function App() {
  const [tableEntries, setTableEntries] = useState({});
  useGlobalListener((key, value) => {
    setTableEntries(previousValue => ({
      ...previousValue,
      [key]: value,
    }));
  }, true);

  const [gyroAngle] = useEntry('/gyro/angle', 0);
  const [gyroPrecision] = useEntry('/gyro/precision', 2);

  return (
    <div className="App">
      <KeyValueTable keyValuePairs={tableEntries} />
      <frc-gyro value={gyroAngle} precision={gyroPrecision}></frc-gyro>
    </div>
  );
}

export default App;
