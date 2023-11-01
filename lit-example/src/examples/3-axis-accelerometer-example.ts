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

  @state() x = 0;
  @state() y = 0;
  @state() z = 0;

  firstUpdated() {
    ["x", "y", "z"].forEach((prop) => {
      this.nt4.addKeyListener(
        `/dash/3AxisAccelerometer/${prop}`,
        (_, value: number) => {
          (this as any)[prop] = value;
        },
        true
      );
    });
  }

  render() {
    return html`
      <frc-3-axis-accelerometer
        x=${this.x}
        y=${this.y}
        z=${this.z}
      ></frc-3-axis-accelerometer>
    `;
  }
}
