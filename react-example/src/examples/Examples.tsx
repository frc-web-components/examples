import React, { useState } from 'react';
import GyroExample from './GyroExample';
import useGlobalListener from '../networktables/useGlobalListener';
import KeyValueTable from '../components/KeyValueTable';
import FieldExample from './FieldExample';
import EncoderExample from './EncoderExample';
import ThreeAxisAccelerometerExample from './3AxisAccelerometerExample';
import AccelerometerExample from './AccelerometerExample';
import BasicFmsInfoExample from './BasicFmsInfoExample';
import BooleanBoxExample from './BooleanBoxExample';
import LineChartExample from './LineChartExample';
import Mechanism2dExample from './Mechanism2dExample';
import CanvasExample from './CanvasExample';
import CameraExample from './CameraExample';
import Field3dExample from './Field3dExample';
import GaugeExample from './GaugeExample';

const examples = {
  '3-Axis Accelerometer': <ThreeAxisAccelerometerExample />,
  'Accelerometer': <AccelerometerExample />,
  'Basic FMS Info': <BasicFmsInfoExample />,
  'Boolean Box': <BooleanBoxExample />,
  'Camera': <CameraExample />,
  'Canvas': <CanvasExample />,
  'Encoder': <EncoderExample />,
  'Field': <FieldExample />,
  'Field3d': <Field3dExample />,
  'Gauge': <GaugeExample />,
  'Gyro': <GyroExample />,
  'Line Chart': <LineChartExample />,
  'Mechanism2d': <Mechanism2dExample />
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
      <select className="example-select" value={selectedExample} onChange={handleChange}>
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