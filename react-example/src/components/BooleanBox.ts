import React from "react";
import { createComponent } from "@lit-labs/react";
import BooleanBox from "@frc-web-components/fwc/components/boolean-box";

export default createComponent({
  tagName: "frc-boolean-box",
  elementClass: BooleanBox,
  react: React,
});
