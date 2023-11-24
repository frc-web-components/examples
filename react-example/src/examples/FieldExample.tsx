import React from "react";
import {
  useEntry,
  Field,
  FieldPath,
  FieldRobot,
} from "@frc-web-components/react";

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
