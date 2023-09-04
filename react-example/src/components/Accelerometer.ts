import React from "react";
import { createComponent } from "@lit-labs/react";
import Accelerometer from "@frc-web-components/fwc/components/accelerometer";

export default createComponent({
  tagName: "frc-accelerometer",
  elementClass: Accelerometer,
  react: React,
});
