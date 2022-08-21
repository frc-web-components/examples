import { Component, State, Prop, Fragment, h, Watch } from '@stencil/core';
import { getEventMatches, Match } from '../../api/thebluealliance';

@Component({
  tag: 'tba-event-matches',
  styleUrl: 'tba-event-matches.css',
  shadow: true,
})

export class TbaEventMatches {
  @Prop() teamNumber: number = 254;
  @Prop() eventKey: string = '2022casj';
  @State() eventMatches: Match[] = [];

  @Watch('teamNumber')
  @Watch('eventKey')
  async updateEventMatches() {
    this.eventMatches = await getEventMatches(`frc${this.teamNumber}`, this.eventKey);
  }

  connectedCallback() {
    this.updateEventMatches();
  }

  getMatchesByLevel(level: string): Match[] {
    return this.eventMatches
      .filter(({ comp_level }) => comp_level === level)
      .sort((match1, match2) => {
        return match1.match_number - match2.match_number;
      });
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

  getTeamNumber(teamKey: string): string {
    return teamKey.replace(/^frc/, '');
  }

  renderMatch(title: string, match: Match) {
    const redScore = match.alliances?.red.score ?? 0;
    const blueScore = match.alliances?.blue.score ?? 0;
    const redWins = redScore > blueScore;
    const blueWins = blueScore > redScore;
    const redClasses = ['red-alliance', redWins ? 'winner' : ''].join(' ');
    const blueClasses = ['blue-alliance', blueWins ? 'winner' : ''].join(' ');
    return (
      <tr>
        <td>{title}</td>
        <td class={redClasses} colSpan={2}>{this.getTeamNumber(match.alliances?.red?.team_keys[0])}</td>
        <td class={redClasses} colSpan={2}>{this.getTeamNumber(match.alliances?.red?.team_keys[1])}</td>
        <td class={redClasses} colSpan={2}>{this.getTeamNumber(match.alliances?.red?.team_keys[2])}</td>
        <td class={blueClasses} colSpan={2}>{this.getTeamNumber(match.alliances?.blue?.team_keys[0])}</td>
        <td class={blueClasses} colSpan={2}>{this.getTeamNumber(match.alliances?.blue?.team_keys[1])}</td>
        <td class={blueClasses} colSpan={2}>{this.getTeamNumber(match.alliances?.blue?.team_keys[2])}</td>
        <td class={redClasses}>{redScore}</td>
        <td class={blueClasses}>{blueScore}</td>
      </tr>
    )
  }
}
