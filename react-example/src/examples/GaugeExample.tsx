import React from "react";
import { useEntry, Gauge } from "@frc-web-components/react";

const GaugeExample: React.FC = () => {
  const [value] = useEntry("/dash/gauge/value", 0);

  return (
    <div>
      <Gauge min={0} max={100} value={value} />
    </div>
  );
};

export default GaugeExample;
