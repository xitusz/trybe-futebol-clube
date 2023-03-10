import { Application as App } from 'express';
import Controllers from '../controllers';

const leaderBoard = new Controllers.LeaderBoard();

const LeaderBoard = (app: App) => {
  app.get(
    '/leaderboard/home',
    leaderBoard.leaderBoard,
  );
};

export default LeaderBoard;
