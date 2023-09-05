import React from "react";
import Gyro from "../components/Gyro";
import useEntry from "../networktables/useEntry";

const GyroExample: React.FC = () => {
  const [gyroAngle, setGyroAngle] = useEntry("/dash/gyro/angle", 0);
  const [gyroPrecision] = useEntry("/dash/gyro/precision", 2);

  return (
    <div>
      <Gyro value={gyroAngle} precision={gyroPrecision} />
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
    </div>
  );
};

export default GyroExample;
