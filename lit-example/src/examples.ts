import { html, css, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import "./examples/3-axis-accelerometer-example";
import './examples/accelerometer-example';

const exampleComponents = [
  {
    name: "3-Axis Accelerometer",
    component: "frc-3-axis-accelerometer-example",
  },
  {
    name: "Accelerometer",
    component: "frc-accelerometer-example",
  },
];

@customElement("dashboard-examples")
export class Examples extends LitElement {
  static styles = css`
    .example-select {
      margin: 5px 0 30px;
      font-size: 16px;
      padding: 5px 2px;
    }
  `;

  @state() selectedExample = exampleComponents[0];

  render() {
    return html`
      <div>
        <select
          class="example-select"
          @change=${(ev: Event) => {
            const selectedName = (ev.target as HTMLSelectElement).value;
            this.selectedExample = exampleComponents.find(
              ({ name }) => name === selectedName
            )!;
          }}
        >
          ${exampleComponents.map(
            ({ name }) => html` <option key=${name}>${name}</option> `
          )}
        </select>

        <div>
          ${unsafeHTML(`
          <${this.selectedExample.component}></${this.selectedExample.component}>
        `)}
        </div>
      </div>
    `;
  }
}
