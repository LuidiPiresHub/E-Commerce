import { Request, Response, NextFunction } from 'express';
import { mapStatus } from '../utils/mapStatus';

const errorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (error.name === 'SequelizeConnectionError') {
    return res.status(mapStatus('INTERNAL')).json({ message: 'Error on Database' });
  }
  return res.status(mapStatus('INTERNAL')).json({ message: error });
};

export default errorHandler;
