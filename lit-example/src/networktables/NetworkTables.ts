import { createContext } from "@lit/context";
import NT4SourceProvider from "@frc-web-components/fwc/source-providers/nt4/nt4-provider";
import { Store } from "@webbitjs/store";

export default class NetworkTables {
  private store: Store;
  private provider: NT4SourceProvider;

  constructor(address: string) {
    this.store = new Store();
    this.provider = new NT4SourceProvider();
    this.store.addSourceProvider("NetworkTables", this.provider);
    this.store.setDefaultSourceProvider("NetworkTables");
    this.provider.connect(address);
  }

  getValue<T>(key: string, defaultValue: T): T {
    if (!this.store.getSource("NetworkTables", key)?.hasValue()) {
      return defaultValue;
    }
    return this.store.getSourceValue("NetworkTables", key) as T;
  }

  setValue(key: string, value: unknown) {
    this.provider.userUpdate(key, value);
  }

  addKeyListener<T>(
    key: string,
    callback: (key: string, value: T) => unknown,
    immediateNotify: boolean
  ) {
    return this.store.subscribe(
      "NetworkTables",
      key,
      (value) => {
        callback(key, value as T);
      },
      immediateNotify
    );
  }

  addGlobalListener(
    callback: (key: string, value: unknown) => unknown,
    immediateNotify: boolean
  ) {
    return this.store.subscribeAll(
      "NetworkTables",
      (value: unknown, key: string) => {
        callback(key, value);
      },
      immediateNotify
    );
  }
}

export const nt4Context = createContext<NetworkTables>('nt4');

