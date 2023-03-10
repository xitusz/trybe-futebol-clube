import { Request, Response } from 'express';
import Services from '../services';

class Match {
  service = new Services.Match();

  allMatches = async (_req: Request, res: Response) => {
    try {
      const matches = await this.service.getAll();

      return res.status(200).json(matches);
    } catch (err) {
      res.status(500).json({ message: (err as Error).message });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const {
        homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress,
      } = req.body;

      const newMatch = await this.service.create({
        homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress,
      });

      return res.status(201).json(newMatch);
    } catch (err) {
      res.status(500).json({ message: (err as Error).message });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { homeTeamGoals, awayTeamGoals } = req.body;

      await this.service.update({ id, homeTeamGoals, awayTeamGoals });

      return res.status(200).json({ message: 'Updated' });
    } catch (err) {
      res.status(500).json({ message: (err as Error).message });
    }
  };

  finish = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await this.service.finish(id);

      return res.status(200).json({ message: 'Finished' });
    } catch (err) {
      res.status(500).json({ message: (err as Error).message });
    }
  };
}

export default Match;
