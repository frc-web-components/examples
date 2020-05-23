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
        <frc-control-panel current-color="red"></frc-control-panel>
      </frc-dashboard>
    `;
  }
}

customElements.define('my-dashboard', MyDashboard);