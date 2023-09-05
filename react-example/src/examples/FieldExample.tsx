import React from "react";
import Field, { FieldPath, FieldRobot } from "../components/Field";
import useEntry from "../networktables/useEntry";

const FieldExample: React.FC = () => {
  const [robotPose] = useEntry("/SmartDashboard/Field/Robot", []);
  const [trajectory] = useEntry("/SmartDashboard/Field/trajectory", []);

  return (
    <div>
      <Field origin="red" rotationUnit="deg">
        <FieldRobot pose={robotPose}></FieldRobot>
        <FieldPath poses={trajectory}></FieldPath>
      </Field>
    </div>
  );
};

export default FieldExample;
