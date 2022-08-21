export { Components, JSX } from './components';
import { addDashboardComponents, addFrc } from '@frc-web-components/plugins';
import createDashboard from '@frc-web-components/frc-web-components';
import GamepadProvider from './providers/gamepad-provider';

const dashboard = createDashboard(document.body, 'my-dashboard');
addDashboardComponents(dashboard);
addFrc(dashboard);

dashboard.addSourceProvider('Gamepad', new GamepadProvider());
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
  'xbox-controller': {
    defaultSourceProvider: 'Gamepad',
    defaultSourceKey: '/0',
    dashboard: {
      displayName: 'Xbox Controller'
    },
    properties: {
      axes: { type: 'Array', input: { type: 'NumberArray'} },
      buttonPresses: { type: 'Array', attribute: 'button-presses', input: { type: 'BooleanArray'} }
    }
  }
}, 'My Elements');
