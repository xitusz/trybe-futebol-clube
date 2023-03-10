import { Request, Response } from 'express';
import Services from '../services';

class Team {
  service = new Services.Team();

  allTeams = async (_req: Request, res: Response) => {
    try {
      const teams = await this.service.getAll();

      return res.status(200).json(teams);
    } catch (err) {
      res.status(500).json({ message: (err as Error).message });
    }
  };

  teamById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const team = await this.service.getById(id);

      return res.status(200).json(team);
    } catch (err) {
      res.status(500).json({ message: (err as Error).message });
    }
  };
}

export default Team;
