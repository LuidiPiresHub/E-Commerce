import { Request, Response, NextFunction, } from 'express';
import { registerSchema, loginSchema } from '../schemas/user.schema';
import { mapStatus } from '../utils/mapStatus';

export const validateRegister = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    const message = error.details[0].message;
    return res.status(mapStatus('BAD_REQUEST')).json({ message });
  }
  return next();
};

export const validateLogin = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    const message = error.details[0].message;
    return res.status(mapStatus('BAD_REQUEST')).json({ message });
  }
  return next();
};
