import { Request, Response, NextFunction } from 'express';
import userService from '../services/userService';
import { mapStatus } from '../utils/mapStatus';

const register = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { type, message } = await userService.register(req.body);
    return res.status(mapStatus(type)).json({ message });
  } catch (error) {
    return next(error);
  }
};

const login = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { type, message } = await userService.login(req.body);
    if (type) return res.status(400).json({ message });
    return res.status(200).json({ message });
  } catch (error) {
    return next(error);
  }
};

export default {
  register,
  login,
};
