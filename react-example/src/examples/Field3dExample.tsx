import React from "react";
import Field3d, { Field3dObject } from "../components/Field3d";
import useEntry from "../networktables/useEntry";

const Field3dExample: React.FC = () => {
  const [robotPose] = useEntry("/SmartDashboard/Field/Robot", [0, 0, 0]);

  return (
    <div>
      <Field3d game="Charged Up" origin="blue" backgroundColor="black">
        <Field3dObject
          name="KitBot"
          translation={robotPose.slice(0, 2) as [number, number]}
          rotation={robotPose[2]}
        />
      </Field3d>
    </div>
  );
};

export default Field3dExample;
