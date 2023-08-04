import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';

const secret: string = process.env.JWT_SECRET || 'secret';

const jwtConfig: SignOptions = { expiresIn: '7d', algorithm: 'HS256' };

export const generateToken = (data: string): string => jwt.sign({ data }, secret, jwtConfig);

export const verifyToken = (token: string): JwtPayload | string | null => {
  try {
    return jwt.verify(token, secret);
  } catch {
    return null;
  }
};
