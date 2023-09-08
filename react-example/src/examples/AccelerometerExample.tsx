import React from "react";
import Accelerometer from "../components/Accelerometer";
import useEntry from "../networktables/useEntry";

const AccelerometerExample: React.FC = () => {
  const [value] = useEntry("/dash/accelerometer/value", 0);

  return (
    <div>
      <Accelerometer value={value} />
    </div>
  );
};

export default AccelerometerExample;
