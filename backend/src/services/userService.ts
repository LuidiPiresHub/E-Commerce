import User from '../database/models/user.models';
import { generateToken } from '../auth/jwtFunction';
import { IRegister, ILogin } from '../interfaces/user.interface';
import { UniqueConstraintError } from 'sequelize';

const createUser = async (user: IRegister) => {
  try {
    const { dataValues } = await User.create({ ...user });
    const { password: _, ...userData } = dataValues;
    return { type: null, message: generateToken(userData) };
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      return { type: 'unique', message: 'Email already registered' };
    }
    throw error;
  }
};

const login = async ({ email, password }: ILogin) => {
  const data = await User.findOne({ where: { email, password }, attributes: { exclude: ['password'] } });
  if (!data) return { type: 'invalid', message: 'Invalid fields' };
  return { type: null, message: generateToken(data.dataValues) };
};

export default {
  createUser,
  login,
};
