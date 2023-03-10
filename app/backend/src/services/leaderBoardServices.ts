import MatchModel from '../database/models/match';
import TeamModel from '../database/models/team';

class LeaderBoard {
  calcResults = (match: any) => {
    let teamPoints = 0;
    let teamVictory = 0;
    let teamDraw = 0;
    let teamDefeat = 0;

    match.forEach((m: any) => {
      if (m.homeTeamGoals > m.awayTeamGoals) {
        teamPoints += 3;
        teamVictory += 1;
      }

      if (m.homeTeamGoals === m.awayTeamGoals) {
        teamPoints += 1;
        teamDraw += 1;
      }

      if (m.homeTeamGoals < m.awayTeamGoals) teamDefeat += 1;
    });

    return { teamPoints, teamVictory, teamDraw, teamDefeat };
  };

  calcGoals = (match: any) => {
    let GF = 0;
    let GO = 0;

    match.forEach((m: any) => {
      GF += m.homeTeamGoals;
      GO += m.awayTeamGoals;
    });

    const GB = GF - GO;

    return {
      GF,
      GO,
      GB,
    };
  };

  calcEfficiency = (match: any) => {
    const points = this.calcResults(match).teamPoints;

    const percentageTeam = Number(((points / (match.length * 3)) * 100).toFixed(2));

    return percentageTeam;
  };

  create = async () => {
    const teams = await TeamModel.findAll();

    const matches = await MatchModel.findAll({ where: { inProgress: false } });

    const mapTeams = teams.map(({ id, teamName }) => {
      const filtered = matches.filter((match) => id === match.homeTeam);

      return {
        name: teamName,
        totalPoints: this.calcResults(filtered).teamPoints,
        totalGames: filtered.length,
        totalVictories: this.calcResults(filtered).teamVictory,
        totalDraws: this.calcResults(filtered).teamDraw,
        totalLosses: this.calcResults(filtered).teamDefeat,
        goalsFavor: this.calcGoals(filtered).GF,
        goalsOwn: this.calcGoals(filtered).GO,
        goalsBalance: this.calcGoals(filtered).GB,
        efficiency: this.calcEfficiency(filtered),
      };
    });

    return mapTeams;
  };

  sortStats = async () => {
    const stats = await this.create();

    const result = stats.sort((A, B) => B.totalPoints - A.totalPoints
    || B.totalVictories - A.totalVictories
    || B.goalsBalance - A.goalsBalance
    || B.goalsFavor - A.goalsFavor
    || B.goalsOwn - A.goalsOwn);

    return result;
  };
}

export default LeaderBoard;
