// https://www.thebluealliance.com/apidocs/v3
// https://github.com/TBA-API/tba-api-client-javascript/blob/master/docs/MatchApi.md#getTeamEventMatches

const BASE_URL = 'https://www.thebluealliance.com/api/v3';
const AUTH_KEY = 'RZx0dcbSUzVnCfzsvfHX6MVYH4qc2M8PnQxU1oFO8uIkr1JTuSYuTNpJCUuJMI55';

interface MatchVideos {
  type?: string,
  key?: string
}

interface MatchAlliance {
  score: number,
  team_keys: string[],
  surrogate_team_keys?: string[],
  dq_team_keys?: string[];
}

interface MatchSimpleAlliances {
  red?: MatchAlliance;
  blue?: MatchAlliance;
}

export interface Match {
  key: string;
  comp_level: string;
  set_number: number;
  match_number: number;
  alliances?: MatchSimpleAlliances;
  winning_alliance?: 'red' | 'blue' | '',
  event_key: string,
  time?: number,
  actual_time?: number,
  predicted_time?: number,
  post_result_time?: number,
  score_breakdown?: unknown,
  videos?: MatchVideos[],
}

function getUrl(requestUrl: string): string {
  return `${BASE_URL}${requestUrl}?X-TBA-Auth-Key=${AUTH_KEY}`;
}

export async function getEventMatches(teamKey: string, eventKey: string): Promise<Match[]> {
  const url = getUrl(`/team/${teamKey}/event/${eventKey}/matches`);
  const response = await fetch(url);
  if (response.ok) {
    return await response.json() as Match[];
  } else {
    return [];
  }
}

