export { Components, JSX } from './components';
import { addDashboardComponents, addFrc } from '@frc-web-components/plugins';
import TbaProvider from './providers/tba-provider';
import createDashboard from '@frc-web-components/frc-web-components';

const dashboard = createDashboard(document.body, 'my-dashboard');
addDashboardComponents(dashboard);
addFrc(dashboard);

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
      teamNumber: { type: 'Number', defaultValue: 254 },
      eventKey: { type: 'String', defaultValue: '2022casj' },
    }
  },
  'my-gamepad': {
    dashboard: {
      displayName: 'Gamepad'
    }
  }
}, 'My Elements');
