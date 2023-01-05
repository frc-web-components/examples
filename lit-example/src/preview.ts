import './my-counter';
import createDashboard from '@frc-web-components/fwc';
import addPlugin from './plugin';

const dashboard = createDashboard(document.body);
addPlugin(dashboard);
