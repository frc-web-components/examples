export { Components, JSX } from './components';
import { FrcDashboard } from '@frc-web-components/dashboard';
import addPlugins from '@frc-web-components/plugins';
import { getEventMatches } from './api/thebluealliance';

getEventMatches('frc2423', '2022mabos').then(async matches => {
  console.log('response:', matches);
});

const dashboard = new FrcDashboard(document.body);
addPlugins(dashboard);

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
  }
})