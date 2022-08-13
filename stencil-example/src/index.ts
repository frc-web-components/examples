export { Components, JSX } from './components';
import { FrcDashboard } from '@frc-web-components/dashboard';
import addPlugins from '@frc-web-components/plugins';
import TbaProvider from './providers/tba-provider';

const dashboard = new FrcDashboard(document.body);
addPlugins(dashboard);
dashboard.addSourceProvider('tba', new TbaProvider());

dashboard.addElements({
  'my-boolean-box': {
    dashboard: {
      displayName: 'Boolean Box',
    },
    properties: {
      value: { type: 'Boolean', primary: true },
      trueColor: { type: 'String', input: { type: 'ColorPicker' }, defaultValue: '#00ff00', attribute: 'true-color' },
      falseColor: { type: 'String', input: { type: 'ColorPicker' }, defaultValue: '#ff0000', attribute: 'false-color' },
      label: { type: 'String' }
    }
  },
  'tba-event-matches': {
    dashboard: {
      displayName: 'TBA Event Matches',
    },
    properties: {
      eventMatches: { type: 'Object', primary: true },
    }
  }
})