import React from "react";
import {
  CanvasCircle,
  CanvasGroup,
  CanvasLine,
  CanvasNGon,
  CanvasRect,
  CanvasText,
  Canvas,
  useEntry,
} from "@frc-web-components/react";

const CanvasExample: React.FC = () => {
  const [text] = useEntry("/dash/canvas/text", "Text goes here...");
  const [groupAngle] = useEntry("/dash/canvas/groupAngle", 0);
  const [ngonSides] = useEntry("/dash/canvas/ngonSides", 5);

  return (
    <div>
      <Canvas style={{ width: "500px", height: "350px" }}>
        <CanvasText
          text={text}
          fontSize={30}
          fillColor="green"
          transform={[250, 25]}
        />
        <CanvasLine points={[130, 45, 370, 45]} color="yellow" />
        <CanvasGroup
          transform={[100, 100, groupAngle]}
          transformOrigin={[150, 35]}
        >
          <CanvasCircle
            radius={30}
            endAngle={270}
            strokeColor="white"
            fillColor="red"
            transform={[25, 50]}
          />
          <CanvasRect
            width={50}
            height={25}
            radii={10}
            opacity={0.5}
            fillColor="#5555ff"
            transform={[150, 50]}
          />
          <CanvasNGon
            sides={ngonSides}
            radius={40}
            strokeColor="pink"
            strokeWidth={20}
            transform={[250, 60]}
          />
        </CanvasGroup>
      </Canvas>
    </div>
  );
};

export default CanvasExample;
