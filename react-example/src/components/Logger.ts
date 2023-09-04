import React from 'react';
import {createComponent} from '@lit-labs/react';
import Logger from '@frc-web-components/fwc/components/logger';

export default createComponent({
  tagName: 'frc-logger',
  elementClass: Logger,
  react: React,
});