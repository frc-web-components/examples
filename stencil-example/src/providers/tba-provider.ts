import { SourceProvider } from "@webbitjs/store";
import { getEventMatches } from "../api/thebluealliance";

export default class TbaProvider extends SourceProvider {
  requestSource(key: string): void {
    const [, requestName, teamKey, eventKey] = key.split('/');
    if (requestName === 'getEventMatches') {
      getEventMatches(teamKey, eventKey).then(matches => {
        this.updateSource(key, matches);
      });
    }
  }
}