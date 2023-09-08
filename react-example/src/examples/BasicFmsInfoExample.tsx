import React from "react";
import { useFmsInfo } from "../components/BasicFmsInfo";
import BasicFmsInfo from "../components/BasicFmsInfo";

const BasicFmsInfoExample: React.FC = () => {
  const fmsInfo = useFmsInfo('/FMSInfo');

  console.log('fmsInfo:', fmsInfo)

  return (
    <div>
      <BasicFmsInfo {...fmsInfo} />
    </div>
  );
};

export default BasicFmsInfoExample;
