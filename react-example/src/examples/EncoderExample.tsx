import React from "react";
import { Encoder, useEntry } from "@frc-web-components/react";

const EncoderExample: React.FC = () => {
  const [speed] = useEntry("/dash/encoder/speed", 0);
  const [distance] = useEntry("/dash/encoder/distance", 0);

  return (
    <div>
      <Encoder speed={speed} distance={distance} />
    </div>
  );
};

export default EncoderExample;
