import React from "react";
import BooleanBox from "../components/BooleanBox";
import useEntry from "../networktables/useEntry";

const BooleanBoxExample: React.FC = () => {
  const [value] = useEntry("/dash/booleanBox/value", false);

  return (
    <div>
      <BooleanBox value={value} falseColor="orange" trueColor="#55ff55" label="Box" />
    </div>
  );
};

export default BooleanBoxExample;
