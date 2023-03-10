import { sign, verify } from 'jsonwebtoken';
import * as fs from 'fs';

const JWT_SECRET = fs.readFileSync('./jwt.evaluation.key');

class Jwt {
  sign = ({ username, role, email }: any) => {
    try {
      const token = sign({ username, role, email }, JWT_SECRET, {
        expiresIn: '7d',
        algorithm: 'HS256',
      });

      return token;
    } catch (err) {
      return (err as { message: string }).message;
    }
  };

  verify = (token: string) => {
    try {
      const decoded = verify(token, JWT_SECRET);

      return decoded;
    } catch (err) {
      return false;
    }
  };
}

export default Jwt;
