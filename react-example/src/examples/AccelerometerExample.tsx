import React from "react";
import { Accelerometer, useEntry } from "@frc-web-components/react";

const AccelerometerExample: React.FC = () => {
  const [value] = useEntry("/dash/accelerometer/value", 0);

  return (
    <div>
      <Accelerometer value={value} />
    </div>
  );
};

export default AccelerometerExample;
