import React from "react";
import { useFmsInfo } from "../components/BasicFmsInfo";
import BasicFmsInfo from "../components/BasicFmsInfo";

const BasicFmsInfoExample: React.FC = () => {
  const fmsInfo = useFmsInfo('/FMSInfo');

  return (
    <div>
      <BasicFmsInfo {...fmsInfo} />
    </div>
  );
};

export default BasicFmsInfoExample;
