import { Response, Request, NextFunction } from 'express';
import * as Bcrypt from 'bcryptjs';
import Services from '../services';

class Login {
  service = new Services.Login();

  emailValidation = (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400)
        .json({ message: 'All fields must be filled' });
    }

    next();
  };

  passwordValidation = (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;

    if (!password || password.length < 6) {
      return res.status(400)
        .json({ message: 'All fields must be filled' });
    }

    next();
  };

  credentialsValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const user = await this.service.getCredentials(email);

    if (!user) {
      return res.status(401)
        .json({ message: 'Incorrect email or password' });
    }

    if (!Bcrypt.compareSync(password, user.password)) {
      return res
        .status(401)
        .send({ message: 'Incorrect email or password' });
    }

    next();
  };
}

export default Login;
