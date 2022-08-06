export { Components, JSX } from './components';
import { FrcDashboard } from '@frc-web-components/dashboard';
import addPlugins from '@frc-web-components/plugins';

const dashboard = new FrcDashboard(document.body);
addPlugins(dashboard);

dashboard.addElements({
  'my-component': {
    properties: {
      first: { type: 'String' },
      middle: { type: 'String' },
      last: { type: 'String' }
    }
  }
})