import { Application as App } from 'express';
import Controllers from '../controllers';
import Validations from '../middlewares';

const login = new Controllers.Login();
const validation = new Validations.Login();
const token = new Validations.Auth();

const Login = (app: App) => {
  app.post(
    '/login',
    validation.emailValidation,
    validation.passwordValidation,
    validation.credentialsValidation,
    login.login,
  );

  app.get(
    '/login/validate',
    token.auth,
    login.loginValidate,
  );
};

export default Login;
