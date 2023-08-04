import { Request, Response, NextFunction } from 'express';

const errorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  return res.status(500).json({ type: 'Internal Server Error', message: error });
};

export default errorHandler;
