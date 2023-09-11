import React from "react";
import Gauge from "../components/Gauge";
import useEntry from "../networktables/useEntry";

const GaugeExample: React.FC = () => {
  const [value] = useEntry("/dash/gauge/value", 0);

  return (
    <div>
      <Gauge min={0} max={100} value={value} />
    </div>
  );
};

export default GaugeExample;
