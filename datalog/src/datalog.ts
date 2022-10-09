import { FrcDashboard } from "@frc-web-components/dashboard";
import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import DatalogProvider from "./datalog-provider";

@customElement("fwc-datalog")
export class Datalog extends LitElement {
  static styles = css`
    :host {
    }
  `;

  @property({ type: FrcDashboard, attribute: false })
  dashboard!: FrcDashboard;

  @state() elapsedTime: number = 0;
  @state() duration: number = 0;

  firstUpdated() {
    const provider = this.dashboard
      .getStore()
      .getSourceProvider("datalog") as DatalogProvider;
    setInterval(() => {
      this.elapsedTime = provider.getElapsedTime();
      this.duration = provider.getDuration();
    }, 1000 / 60);
  }

  render() {
    return html`<p>Time: ${this.elapsedTime.toFixed(2)} / ${this.duration.toFixed(2)}</p> `;
  }
}
