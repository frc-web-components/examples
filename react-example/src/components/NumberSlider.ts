import React from "react";
import { createComponent } from "@lit-labs/react";
import NumberSlider from "@frc-web-components/fwc/components/number-slider";

export default createComponent({
  tagName: "frc-number-slider",
  elementClass: NumberSlider,
  react: React,
});
