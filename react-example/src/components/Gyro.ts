import React from 'react';
import {createComponent} from '@lit-labs/react';
import Gyro from '@frc-web-components/fwc/components/gyro';

export default createComponent({
  tagName: 'frc-gyro',
  elementClass: Gyro,
  react: React,
});