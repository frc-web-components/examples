import { Config } from '@stencil/core';

export const config: Config = {
  invisiblePrehydration: false,
  hydratedFlag: {
    selector: 'attribute'
  },
  namespace: 'stencil-example',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
