import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';

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
      // copy: [
      //   {
      //     src: '**/*.{jpg,png}',
      //     dest: 'dist/components/assets',
      //     warn: true,
      //   }
      // ]
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    nodePolyfills(),
  ]
};
