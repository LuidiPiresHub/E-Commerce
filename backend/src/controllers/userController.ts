import { Request, Response, NextFunction } from 'express';
import userService from '../services/userService';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { type, message } = await userService.createUser(req.body);
    if (type) return res.status(409).json({ message });
    return res.status(200).json({ message });
  } catch (error) {
    return next(error);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { type, message } = await userService.login(req.body);
    if (type) return res.status(400).json({ message });
    return res.status(200).json({ message });
  } catch (error) {
    return next(error);
  }
};

export default {
  createUser,
  login,
};
