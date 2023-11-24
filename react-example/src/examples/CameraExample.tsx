import React from "react";
import { CanvasMjpgStream, Canvas, useEntry } from "@frc-web-components/react";

const CameraExample: React.FC = () => {
  const [cameraSrcs] = useEntry("/CameraPublisher/USB Camera 0/streams", []);
  return (
    <div>
      <Canvas style={{ width: "500px", height: "350px" }}>
        <CanvasMjpgStream srcs={cameraSrcs} />
      </Canvas>
    </div>
  );
};

export default CameraExample;
