import React from "react";
import { createComponent } from "@lit-labs/react";
import ToggleGroup from "@frc-web-components/fwc/components/toggle-group";

export default createComponent({
  tagName: "frc-toggle-group",
  elementClass: ToggleGroup,
  react: React,
});
