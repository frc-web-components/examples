import { SourceProvider } from "@webbitjs/store";

function getRange(size: number): number[] {
  const range: number[] = [];
  for (let i = 0; i < size; i++) {
    range.push(i);
  }
  return range;
}

interface Log {
  duration: number;
  changes: {
    time: number;
    values: Record<string, unknown>;
  }[];
}

export default class DatalogProvider extends SourceProvider {

  private log!: Log;
  private startTime!: number;
  private lastChangeIndex = 0;
  private elapsedTime = 0;
  
  constructor() {
    super();
    this.restart();

    setInterval(() => {
      this.elapsedTime = (Date.now() - this.startTime) / 1000;
      if (this.elapsedTime > this.log.duration) {
       this.restart();
      } else {
        let changeIndex = this.lastChangeIndex;
        for (; changeIndex < this.log.changes.length; changeIndex++) {
          if (this.log.changes[changeIndex].time > this.elapsedTime) {
            break;
          }
          const { values } = this.log.changes[changeIndex];
          Object.entries(values).forEach(([key, value]) => {
            this.updateSource(key, value);
          });
        }
        this.lastChangeIndex = changeIndex;
      }
    }, 1000 / 60);
  }

  private restart(): void {
    // create a mock log
    this.log = {
      duration: 10,
      changes: getRange(20).map((time) => ({
        time: time * 0.5,
        values: {
          "/gyro/value": 20 + 10 * (time * 0.5),
        },
      })),
    };
    this.startTime = Date.now();
    this.elapsedTime = 0;
    this.lastChangeIndex = 0;
    this.clearSources();
  }

  userUpdate(): void {
    // we don't want updates from the UI so we do nothing
  }

  getDuration() {
    return this.log.duration;
  }

  getElapsedTime() {
    return this.elapsedTime;
  }
}
