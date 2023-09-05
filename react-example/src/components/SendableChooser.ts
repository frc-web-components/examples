import React from "react";
import { createComponent } from "@lit-labs/react";
import SendableChooser from "@frc-web-components/fwc/components/sendable-chooser";

export default createComponent({
  tagName: "frc-sendable-chooser",
  elementClass: SendableChooser,
  react: React,
});
