import React from "react";
import Canvas, { CanvasMjpgStream } from "../components/Canvas";
import useEntry from "../networktables/useEntry";

const CameraExample: React.FC = () => {
  const [cameraSrcs] = useEntry('/CameraPublisher/USB Camera 0/streams', []);
  return (
    <div>
      <Canvas style={{ width: "500px", height: "350px" }}>
        <CanvasMjpgStream srcs={cameraSrcs} />
      </Canvas>
    </div>
  );
};

export default CameraExample;
