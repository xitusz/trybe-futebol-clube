import MatchModel from '../database/models/match';
import TeamModel from '../database/models/team';

class Match {
  getAll = async () => {
    const matches = await MatchModel.findAll({
      include: [{
        model: TeamModel,
        as: 'teamAway',
        attributes: ['teamName'],
      }, {
        model: TeamModel,
        as: 'teamHome',
        attributes: ['teamName'],
      }],
    });

    return matches;
  };

  create = async ({
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress,
  }: any) => {
    const newMatch = await MatchModel.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress,
    });

    return newMatch;
  };

  update = async ({ id, homeTeamGoals, awayTeamGoals }: any) => {
    await MatchModel.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
  };

  finish = async (id: any) => {
    await MatchModel.update(
      { inProgress: false },
      { where: { id } },
    );
  };
}

export default Match;
