import './my-counter';
import { FrcDashboard } from '@frc-web-components/frc-web-components';

export default function addPlugin(dashboard: FrcDashboard) {
  dashboard.addElements({
    'my-counter': {
      properties: {
        count: { type: 'Number', reflect: true }
      }
    },
  }, 'My Elements');
}