import React, { useState } from "react";
import Mechanism2d, { useMechanism2dRoots } from "../components/Mechanism2d";

const Mechanism2dExample: React.FC = () => {
  const mechanism2dRoots = useMechanism2dRoots("/SmartDashboard/Mech2d");

  const [angle, setAngle] = useState(90);
  const [length, setLength] = useState(0.5);

  return (
    <div>
      <Mechanism2d roots={mechanism2dRoots} style={{ marginRight: "5px" }} />
      <Mechanism2d
        roots={[
          {
            x: 1.5,
            y: 0.5,
            children: [
              {
                angle,
                color: "#00FF00",
                length: 0.5334,
                weight: 10,
                children: [
                  {
                    angle: 0,
                    color: "#008000",
                    length,
                    weight: 6,
                    children: [],
                  },
                ],
              },
            ],
          },
        ]}
      />

      <div className="inputs">
        <div className="input">
          <label>Angle:</label>
          <input
            type="range"
            min="0"
            max="180"
            value={angle}
            onChange={(ev) => setAngle(parseFloat(ev.target.value))}
          />
          <span style={{ display: "inline-block", marginLeft: "5px" }}>
            {angle}
          </span>
        </div>
        <div className="input">
          <label>Length:</label>
          <input
            type="range"
            min="0"
            max="1"
            value={length}
            step={0.05}
            onChange={(ev) => setLength(parseFloat(ev.target.value))}
          />
          <span style={{ display: "inline-block", marginLeft: "5px" }}>
            {length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Mechanism2dExample;
