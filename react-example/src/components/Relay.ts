import React from "react";
import { createComponent } from "@lit-labs/react";
import Relay from "@frc-web-components/fwc/components/relay";

export default createComponent({
  tagName: "frc-relay",
  elementClass: Relay,
  react: React,
});
