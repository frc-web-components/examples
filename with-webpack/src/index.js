import "@frc-web-components/frc-web-components";
import { LitElement, html, css } from "@webbitjs/webbit";

class MyDashboard extends LitElement {

  static get styles() {
    return css`
      frc-control-panel {
        width: 500px;
      }
    `;
  }

  render() {
    return html`
      <frc-dashboard>
        <frc-nt-number-default key="/gyro" value="100"></frc-nt-number-default>
        <frc-control-panel current-color="red"></frc-control-panel>
        <frc-gyro source-key="/gyro"></frc-gyro>
      </frc-dashboard>
    `;
  }
}

customElements.define('my-dashboard', MyDashboard);