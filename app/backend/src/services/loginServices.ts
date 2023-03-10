import UserModel from '../database/models/user';

class Login {
  getCredentials = async (email: string) => {
    const user = await UserModel.findOne({ where: { email } });

    return user;
  };
}

export default Login;
