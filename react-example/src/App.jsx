import { useState } from 'react';
import KeyValueTable from './components/KeyValueTable';
import useGlobalListener from './networktables/useGlobalListener';
import NetworkTables from './networktables/networktables';

window.NetworkTables = NetworkTables;

function App() {
  const [tableEntries, setTableEntries] = useState({});
  useGlobalListener((key, value) => {
    setTableEntries(previousValue => ({
      ...previousValue,
      [key]: value,
    }));
  }, true);

  return (
    <div className="App">
      <KeyValueTable keyValuePairs={tableEntries} />
    </div>
  );
}

export default App;
