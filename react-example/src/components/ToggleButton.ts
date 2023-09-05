import React from "react";
import { createComponent } from "@lit-labs/react";
import ToggleButton from "@frc-web-components/fwc/components/toggle-button";

export default createComponent({
  tagName: "frc-toggle-button",
  elementClass: ToggleButton,
  react: React,
});
