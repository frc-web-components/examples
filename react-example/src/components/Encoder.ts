import React from 'react';
import {createComponent} from '@lit-labs/react';
import Encoder from '@frc-web-components/fwc/components/encoder';

export default createComponent({
  tagName: 'frc-encoder',
  elementClass: Encoder,
  react: React,
});