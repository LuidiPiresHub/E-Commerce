import jwt from 'jsonwebtoken';

const jwtConfig = {
  expiresIn: '7d',
  // algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'secret';

export const generateToken = (data: string): string => jwt.sign({ data }, secret, jwtConfig);

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secret);
  } catch {
    return null;
  }
};
