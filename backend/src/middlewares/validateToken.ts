import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../auth/jwtFunction';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(400).json({ message: 'Token is Required' });
  if (!verifyToken(token)) return res.status(400).json({ message: 'Invalid Token' });
  return next();
};

export default validateToken;
