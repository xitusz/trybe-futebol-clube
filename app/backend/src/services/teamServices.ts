import TeamModel from '../database/models/team';

class Team {
  getAll = async () => {
    const teams = await TeamModel.findAll();

    return teams;
  };

  getById = async (id: any) => {
    const team = await TeamModel.findOne({ where: { id } });

    return team;
  };
}

export default Team;
