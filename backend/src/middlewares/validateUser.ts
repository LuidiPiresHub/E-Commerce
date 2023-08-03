import { Request, Response, NextFunction, } from 'express';
import { userSchema } from '../schemas/user.schema';
import { mapStatus } from '../utils/mapStatus';

const validateRegister = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    const message = error?.details[0].message;
    return res.status(mapStatus('BAD_REQUEST')).json({ message });
  }
  return next();
};

export default validateRegister;

