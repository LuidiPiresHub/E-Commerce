import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../auth/jwtFunction';
import { mapStatus } from '../utils/mapStatus';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(mapStatus('UNAUTHORIZED')).json({ message: 'Token is required' });
  if (!verifyToken(token)) return res.status(mapStatus('UNAUTHORIZED')).json({ message: 'Invalid Token' });
  return next();
};

export default validateToken;
