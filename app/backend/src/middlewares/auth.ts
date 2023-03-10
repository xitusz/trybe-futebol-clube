import { Response, Request, NextFunction } from 'express';
import Jwt from './jwt';

class Auth {
  jwt = new Jwt();

  auth = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const verifyToken = this.jwt.verify(authorization);

    if (!verifyToken) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.body.user = verifyToken;

    next();
  };
}

export default Auth;
