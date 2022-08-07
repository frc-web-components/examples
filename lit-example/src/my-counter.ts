import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('my-counter')
export class MyCounter extends LitElement {

  static styles = css`
    button {
      border: 3px solid black;
      background: white;
    }
  `;

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number, reflect: true })
  count = 0

  private onClick() {
    this.count++
  }

  render() {
    return html`
      <button @click=${this.onClick} part="button">
        count is ${this.count}
      </button>
    `
  }
}