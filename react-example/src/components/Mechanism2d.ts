import React, { useEffect, useState } from 'react';
import { useNt4 } from '../networktables/NT4Provider';
import {createComponent} from '@lit-labs/react';
import Mechanism2d, { Mechanism2dRoot, getMechanism2dRoots } from '@frc-web-components/fwc/components/mechanism2d';

export default createComponent({
  tagName: 'frc-mechanism2d',
  elementClass: Mechanism2d,
  react: React,
});


export function useMechanism2dRoots<T>(key: string) {
  const { store } = useNt4();
  const [roots, setRoots] = useState<Mechanism2dRoot[]>([]);

  useEffect(() => {
    return store.subscribe('NetworkTables', key, () => {
      const source = store.getSource('NetworkTables', key);
      if (source) {
        setRoots(getMechanism2dRoots(source));
      }
    }, true);
  }, []);

  return roots;
}
