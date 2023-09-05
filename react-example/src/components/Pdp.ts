import React from "react";
import { createComponent } from "@lit-labs/react";
import Pdp from "@frc-web-components/fwc/components/pdp";

export default createComponent({
  tagName: "frc-pdp",
  elementClass: Pdp,
  react: React,
});
