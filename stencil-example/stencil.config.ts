import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import copy from 'rollup-plugin-copy';

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
  plugins: [
    nodePolyfills(),
  ],
  rollupPlugins: {
    after: [
      copy({
        targets: [
          {
            src: 'src/**/*.{jpg,png}',
            dest: 'dist/components/assets',
          },
        ],
      }),
    ]
  },
  extras: {
    experimentalImportInjection: true
  }
};
