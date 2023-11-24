import React from "react";
import { useEntry, Gyro } from "@frc-web-components/react";

const GyroExample: React.FC = () => {
  const [gyroAngle] = useEntry("/dash/gyro/angle", 0);
  const [gyroPrecision] = useEntry("/dash/gyro/precision", 2);

  return (
    <div>
      <Gyro value={gyroAngle} precision={gyroPrecision} />
    </div>
  );
};

export default GyroExample;
