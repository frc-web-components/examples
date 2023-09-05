import React, { useState } from 'react';
import GyroExample from './GyroExample';
import useGlobalListener from '../networktables/useGlobalListener';
import KeyValueTable from '../components/KeyValueTable';
import FieldExample from './FieldExample';
import EncoderExample from './EncoderExample';

const examples = {
  'Encoder': <EncoderExample />,
  'Gyro': <GyroExample />,
  'Field': <FieldExample />,
};

const Examples: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState(Object.keys(examples)[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedExample(event.target.value);
  };

  const [tableEntries, setTableEntries] = useState({});
  useGlobalListener((key, value) => {
    setTableEntries(previousValue => ({
      ...previousValue,
      [key]: value,
    }));
  }, true);


  return (
    <div>
      <select value={selectedExample} onChange={handleChange}>
        {Object.keys(examples).map(name => (
          <option key={name}>{name}</option>
        ))}
      </select>

      <div>
        {examples[selectedExample]}
      </div>

      <KeyValueTable keyValuePairs={tableEntries} />
    </div>
  );
};

export default Examples;