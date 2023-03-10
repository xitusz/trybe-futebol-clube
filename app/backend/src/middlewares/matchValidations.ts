import { Response, Request, NextFunction } from 'express';
import Services from '../services';

class Match {
  service = new Services.Match();
  serviceTeam = new Services.Team();

  matchValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { homeTeam, awayTeam } = req.body;

    const hTeam = await this.serviceTeam.getById(homeTeam);
    const aTeam = await this.serviceTeam.getById(awayTeam);

    if (homeTeam === awayTeam) {
      return res
        .status(401)
        .json({
          message: 'It is not possible to create a match with two equal teams',
        });
    }

    if (!hTeam || !aTeam) {
      return res
        .status(404)
        .json({
          message: 'There is no team with such id!',
        });
    }

    next();
  };
}

export default Match;
