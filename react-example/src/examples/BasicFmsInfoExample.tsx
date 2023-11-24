import React from "react";
import { BasicFmsInfo, useFmsInfo } from "@frc-web-components/react";

const BasicFmsInfoExample: React.FC = () => {
  const fmsInfo = useFmsInfo('/FMSInfo');

  return (
    <div>
      <BasicFmsInfo {...fmsInfo} />
    </div>
  );
};

export default BasicFmsInfoExample;
