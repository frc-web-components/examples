import { useEffect } from 'react';
import NetworkTables from './networktables';

function useGlobalListener(callback, immediateNotify) {
  useEffect(() => {
    return NetworkTables.addGlobalListener((key, value) => {
      callback(key, value);
    }, immediateNotify);
  }, []);
}

export default useGlobalListener;