import { Request, Response } from 'express';
import Services from '../services';

class LeaderBoard {
  service = new Services.LeaderBoard();

  leaderBoard = async (_req: Request, res: Response) => {
    try {
      const board = await this.service.sortStats();

      return res.status(200).json(board);
    } catch (err) {
      res.status(500).json({ message: (err as Error).message });
    }
  };
}

export default LeaderBoard;
