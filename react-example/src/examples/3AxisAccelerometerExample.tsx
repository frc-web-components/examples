import React from "react";
import ThreeAxisAccelerometer from "../components/3AxisAccelerometer";
import useEntry from "../networktables/useEntry";

const ThreeAxisAccelerometerExample: React.FC = () => {
  const [x] = useEntry("/dash/3AxisAccelerometer/x", 0);
  const [y] = useEntry("/dash/3AxisAccelerometer/y", 0);
  const [z] = useEntry("/dash/3AxisAccelerometer/z", 0);

  return (
    <div>
      <ThreeAxisAccelerometer x={x} y={y} z={z} />
    </div>
  );
};

export default ThreeAxisAccelerometerExample;
