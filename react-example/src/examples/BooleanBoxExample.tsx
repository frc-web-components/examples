import React from "react";
import { BooleanBox, useEntry } from "@frc-web-components/react";

const BooleanBoxExample: React.FC = () => {
  const [value] = useEntry("/dash/booleanBox/value", false);

  return (
    <div>
      <BooleanBox value={value} falseColor="orange" trueColor="#55ff55" label="Box" />
    </div>
  );
};

export default BooleanBoxExample;
