import { Request, Response, NextFunction } from 'express';

const errorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error);
  return res.status(500).json({ message: 'Internal Server Error' });
};

export default errorHandler;
