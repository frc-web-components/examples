import React from "react";
import { createComponent } from "@lit-labs/react";
import NumberBar from "@frc-web-components/fwc/components/number-bar";

export default createComponent({
  tagName: "frc-number-bar",
  elementClass: NumberBar,
  react: React,
});
