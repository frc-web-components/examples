import React from "react";
import Field, { FieldPath, FieldRobot } from "../components/Field";
import useEntry from "../networktables/useEntry";
import Encoder from "../components/Encoder";

const EncoderExample: React.FC = () => {
  const [speed, setSpeed] = useEntry("/dash/encoder/speed", 0);
  const [distance, setDistance] = useEntry("/dash/encoder/distance", 0);

  return (
    <div>
      <Encoder speed={speed} distance={distance} />
      <div className="gyro-input">
        <label>Encoder Speed:</label>
        <input
          type="range"
          min="-1"
          max="1"
          value={speed}
          onChange={(ev) => setSpeed(parseFloat(ev.target.value))}
        />
      </div>
      <div className="gyro-input">
        <label>Encoder Distance:</label>
        <input
          type="range"
          min="-10"
          max="10"
          value={distance}
          onChange={(ev) => setDistance(parseFloat(ev.target.value))}
        />
      </div>
    </div>
  );
};

export default EncoderExample;
