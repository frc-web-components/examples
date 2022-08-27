import { SourceProvider } from '@webbitjs/store';

export default class MyProvider extends SourceProvider {
  constructor() {
    super();
    this.updateSource('/value', 5);
    this.updateSource('/min', 0);
    this.updateSource('/max', 10);
  }
}
