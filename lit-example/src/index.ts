import './my-counter';
import { FrcDashboard } from '@frc-web-components/dashboard';
import addPlugins from '@frc-web-components/plugins';

const dashboard = new FrcDashboard(document.body);
addPlugins(dashboard);

dashboard.addElements({
  'my-counter': {
    properties: {
      count: { type: 'Number', reflect: true }
    }
  }
})