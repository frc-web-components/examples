import React from "react";
import {
  useEntry,
  LineChart,
  LineChartAxis,
  LineChartData,
  LineChartLegend,
} from "@frc-web-components/react";

const LineChartExample: React.FC = () => {
  const [data1] = useEntry("/dash/lineChart/data1", 0);
  const [data2] = useEntry("/dash/lineChart/data2", 0);

  return (
    <div>
      <LineChart viewTime={15} chartTitle="Line Chart">
        <LineChartData value={data1} />
        <LineChartData value={data2} color="blue" yAxis={1} />
        <LineChartAxis min={-5} max={5} />
        <LineChartAxis side="right" />
        <LineChartLegend position="se" direction="vertical" inside />
      </LineChart>
    </div>
  );
};

export default LineChartExample;
