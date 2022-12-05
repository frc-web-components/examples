import './my-counter';
import createDashboard from '@frc-web-components/frc-web-components';
import addPlugin from './plugin';

const dashboard = createDashboard(document.body);
addPlugin(dashboard);
