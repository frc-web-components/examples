import React from "react";
import { createComponent } from "@lit-labs/react";
import ThreeAxisAccelerometer from "@frc-web-components/fwc/components/3-axis-accelerometer";

export default createComponent({
  tagName: "frc-3-axis-accelerometer",
  elementClass: ThreeAxisAccelerometer,
  react: React,
});
