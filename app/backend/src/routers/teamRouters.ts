import { Application as App } from 'express';
import Controllers from '../controllers';

const team = new Controllers.Team();

const Team = (app: App) => {
  app.get(
    '/teams',
    team.allTeams,
  );

  app.get(
    '/teams/:id',
    team.teamById,
  );
};

export default Team;
