import { Request, Response } from 'express';
import Jwt from '../middlewares/jwt';
import Services from '../services';
import User from '../database/models/user';

class Login {
  service = new Services.Login();
  jwt = new Jwt();

  login = async (req: Request, res: Response) => {
    try {
      const { email } = req.body;

      const user = await this.service.getCredentials(email);

      const { id, username, role } = user as User;

      const token = this.jwt.sign(user);

      return res.status(200).json({
        user: { id, username, role, email },
        token,
      });
    } catch (err) {
      res.status(500).json({ message: (err as Error).message });
    }
  };

  loginValidate = async (req: Request, res: Response) => {
    try {
      const { user: { role } } = req.body;

      return res.status(200).json(role);
    } catch (err) {
      res.status(500).json({ message: (err as Error).message });
    }
  };
}

export default Login;
