import React from "react";
import { createComponent } from "@lit-labs/react";
import VoltageView from "@frc-web-components/fwc/components/voltage-view";

export default createComponent({
  tagName: "frc-voltage-view",
  elementClass: VoltageView,
  react: React,
});
