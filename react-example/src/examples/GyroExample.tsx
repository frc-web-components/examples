import React from "react";
import Gyro from "../components/Gyro";
import useEntry from "../networktables/useEntry";

const GyroExample: React.FC = () => {
  const [gyroAngle, setGyroAngle] = useEntry("/dash/gyro/angle", 0);
  const [gyroPrecision] = useEntry("/dash/gyro/precision", 2);

  return (
    <div>
      <Gyro value={gyroAngle} precision={gyroPrecision} />
    </div>
  );
};

export default GyroExample;
