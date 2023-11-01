import { html, css, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import NetworkTables, { nt4Context } from "./networktables/NetworkTables";
import { provide } from "@lit/context";
import { DashboardThemes, darkTheme } from "@frc-web-components/fwc/themes";
import "./examples";
import "./styles.css";

@customElement("my-dashboard")
export class MyDashboard extends LitElement {
  static styles = css`
    .theme-chooser {
      margin-bottom: 10px;
    }
  `;

  @provide({ context: nt4Context })
  nt4Store = new NetworkTables("localhost");

  /**
   * The number of times the button has been clicked.
   */
  @state() theme = "light";
  @state() themes = new DashboardThemes();

  constructor() {
    super();
    this.themes.addThemeRules("dark", darkTheme);
  }

  updated(changedProps: Map<string, unknown>) {
    console.log("changed props:", changedProps);
    if (changedProps.has("theme")) {
      this.themes.setTheme(document.body, this.theme);
    }
  }

  render() {
    return html`
      <div class="App">
        <div
          class="theme-chooser"
          style=${styleMap({
            color: this.theme === "light" ? "black" : "white",
          })}
        >
          <label>
            <input
              type="radio"
              name="theme-chooser"
              @click=${() => {
                this.theme = "light";
              }}
              ?checked=${this.theme === "light"}
            />
            Light Theme
          </label>
          <label>
            <input
              type="radio"
              name="theme-chooser"
              @click=${() => {
                this.theme = "dark";
              }}
              ?checked=${this.theme === "dark"}
            />
            Dark Theme
          </label>
        </div>
        <!-- <Examples /> -->
        <dashboard-examples></dashboard-examples>
      </div>
    `;
  }
}
