import React from "react";
import { createComponent } from "@lit-labs/react";
import Bar from "@frc-web-components/fwc/components/bar";

export default createComponent({
  tagName: "frc-bar",
  elementClass: Bar,
  react: React,
});
