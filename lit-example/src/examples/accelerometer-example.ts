import { html, css, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import NetworkTables, { nt4Context } from "../networktables/NetworkTables";
import { consume } from "@lit/context";
import "@frc-web-components/fwc/components/accelerometer";

@customElement("frc-accelerometer-example")
export class AccelerometerExample extends LitElement {
  static styles = css``;

  @consume({ context: nt4Context })
  @state()
  nt4!: NetworkTables;

  render() {
    const value = this.nt4?.$value("/dash/accelerometer/value", 0);
    return html` <frc-accelerometer value=${value}></frc-accelerometer> `;
  }
}
