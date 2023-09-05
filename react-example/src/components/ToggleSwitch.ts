import React from "react";
import { createComponent } from "@lit-labs/react";
import ToggleSwitch from "@frc-web-components/fwc/components/toggle-switch";

export default createComponent({
  tagName: "frc-toggle-switch",
  elementClass: ToggleSwitch,
  react: React,
});
