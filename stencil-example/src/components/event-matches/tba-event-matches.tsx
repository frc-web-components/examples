import { Component, Prop, Fragment, h } from '@stencil/core';
import { Match } from '../../api/thebluealliance';

@Component({
  tag: 'tba-event-matches',
  styleUrl: 'tba-event-matches.css',
  shadow: true,
})

export class TbaEventMatches {
  @Prop() eventMatches: Match[] = [];

  getMatchesByLevel(level: string): Match[] {
    return this.eventMatches.filter(({ comp_level }) => comp_level === level);
  }

  render() {
    const qualMatches = this.getMatchesByLevel('qm');
    const quarterFinalMatches = this.getMatchesByLevel('qf');
    const semiFinalMatches = this.getMatchesByLevel('sf');
    const finalMatches = this.getMatchesByLevel('f');

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Video</th>
              <th>Match</th>
              <th colSpan={6}>Red Alliance</th>
              <th colSpan={6}>Blue Alliance</th>
              <th colSpan={2}>Scores</th>
            </tr>
          </thead>
          <tbody>
            {qualMatches.length > 0 && (
              <Fragment>
                <tr><th colSpan={16}>Qualifications</th></tr>
                {qualMatches.map(match => {
                  const title = `Quals ${match.match_number}`;
                  return this.renderMatch(title, match);
                })}
              </Fragment>
            )}
            {quarterFinalMatches.length > 0 && (
              <Fragment>
                <tr><th colSpan={16}>Quarterfinals</th></tr>
                {quarterFinalMatches.map(match => {
                  const title = `Quarters ${match.set_number} Match ${match.match_number}`;
                  return this.renderMatch(title, match);
                })}
              </Fragment>
            )}
            {semiFinalMatches.length > 0 && (
              <Fragment>
                <tr><th colSpan={16}>Semifinals</th></tr>
                {semiFinalMatches.map(match => {
                  const title = `Semis ${match.set_number} Match ${match.match_number}`;
                  return this.renderMatch(title, match);
                })}
              </Fragment>
            )}
            {finalMatches.length > 0 && (
              <Fragment>
                <tr><th colSpan={16}>Finals</th></tr>
                {finalMatches.map(match => {
                  const title = `Finals ${match.set_number} Match ${match.match_number}`;
                  return this.renderMatch(title, match);
                })}
              </Fragment>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  renderMatch(title: string, match: Match) {
    const video = match.videos?.[0].key;
    return (
      <tr>
        <td></td>
        <td>{title}</td>
        <td colSpan={2}>{match.alliances?.red?.team_keys[0]}</td>
        <td colSpan={2}>{match.alliances?.red?.team_keys[1]}</td>
        <td colSpan={2}>{match.alliances?.red?.team_keys[2]}</td>
        <td colSpan={2}>{match.alliances?.blue?.team_keys[0]}</td>
        <td colSpan={2}>{match.alliances?.blue?.team_keys[1]}</td>
        <td colSpan={2}>{match.alliances?.blue?.team_keys[2]}</td>
        <td>{match.alliances?.red.score}</td>
        <td>{match.alliances?.blue.score}</td>
      </tr>
    )
  }
}
