import React from 'react';
import {createComponent} from '@lit-labs/react';
import Gauge from '@frc-web-components/fwc/components/gauge';

export default createComponent({
  tagName: 'frc-gauge',
  elementClass: Gauge,
  react: React,
});