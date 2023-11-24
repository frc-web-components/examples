import { html, css, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import NetworkTables, { nt4Context } from "../networktables/NetworkTables";
import { consume } from "@lit/context";
import "@frc-web-components/fwc/components/3-axis-accelerometer";

@customElement("frc-3-axis-accelerometer-example")
export class ThreeAxisAccelerometerExample extends LitElement {
  static styles = css``;

  @consume({ context: nt4Context })
  @state()
  nt4!: NetworkTables;

  render() {
    const x = this.nt4?.$value("/dash/3AxisAccelerometer/x", 0);
    const y = this.nt4?.$value("/dash/3AxisAccelerometer/y", 0);
    const z = this.nt4?.$value("/dash/3AxisAccelerometer/z", 0);

    return html`
      <frc-3-axis-accelerometer x=${x} y=${y} z=${z}></frc-3-axis-accelerometer>
    `;
  }
}
