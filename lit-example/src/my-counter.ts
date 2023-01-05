import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import getAssetUrl from '@frc-web-components/fwc/get-asset-url';

@customElement("my-counter")
export class MyCounter extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      width: 200px;
      height: 50px;
    }

    button {
      border: 3px solid black;
      background: white;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }

    button div {
      padding: 10px;
      background: white;
      display: inline-block;
    }
  `;

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number, reflect: true })
  count = 0;

  private onClick() {
    this.count++;
  }

  render() {
    return html`
      <button
        @click=${this.onClick}
        part="button"
        style='background-image: url("${getAssetUrl("button-background.jpg")}")'
      >
        count is ${this.count}
      </button>
    `;
  }
}
