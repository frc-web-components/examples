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

  @state() value = 0;

  firstUpdated() {
    this.nt4.addKeyListener(
      "/dash/accelerometer/value",
      (_, value: number) => {
        this.value = value;
      },
      true
    );
  }
  
  render() {
    return html` <frc-accelerometer value=${this.value}></frc-accelerometer> `;
  }
}
