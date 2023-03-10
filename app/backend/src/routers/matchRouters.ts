import { Application as App } from 'express';
import Controllers from '../controllers';
import Validations from '../middlewares';

const match = new Controllers.Match();
const token = new Validations.Auth();
const validation = new Validations.Match();

const Match = (app: App) => {
  app.get(
    '/matches',
    match.allMatches,
  );

  app.post(
    '/matches',
    token.auth,
    validation.matchValidation,
    match.create,
  );

  app.patch(
    '/matches/:id',
    match.update,
  );

  app.patch(
    '/matches/:id/finish',
    match.finish,
  );
};

export default Match;
