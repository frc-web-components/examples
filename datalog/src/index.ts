import "./datalog";
import { FrcDashboard } from "@frc-web-components/dashboard";
import addPlugins from "@frc-web-components/plugins";
import { render, html } from "lit";
import DatalogProvider from './datalog-provider';

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const dashboard = new FrcDashboard(
      document.querySelector("#dashboard") as HTMLElement
    );
    addPlugins(dashboard);
    dashboard.addSourceProvider('datalog', new DatalogProvider());
    dashboard.setDefaultSourceProvider("datalog");

    (window as any).dashboard = dashboard;
   
    render(
      html`<fwc-datalog .dashboard=${dashboard}></fwc-datalog> `,
      document.querySelector("#datalog") as HTMLElement
    );

    render(
      html`<frc-gyro source-key="/gyro"></fwc-gyro>`,
      document.querySelector("#dashboard") as HTMLElement
    );
  },
  false
);
