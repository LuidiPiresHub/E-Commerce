import User from '../database/models/user.models';
import { generateToken } from '../auth/jwtFunction';
import { IRegister, ILogin, IService } from '../interfaces/user.interface';

const register = async (user: IRegister): Promise<IService> => {
  try {
    const { dataValues } = await User.create({ ...user });
    const { password: _, ...userData } = dataValues;
    return { type: 'CREATED', message: generateToken(userData) };
  } catch (error) {
    const { name } = error as Error;
    if (name === 'SequelizeUniqueConstraintError') {
      return { type: 'UNIQUE', message: 'Email already registered' };
    }
    throw error;
  }
};

const login = async ({ email, password }: ILogin): Promise<IService> => {
  const data = await User.findOne({ where: { email, password }, attributes: { exclude: ['password'] } });
  if (!data) return { type: 'UNAUTHORIZED', message: 'Invalid fields' };
  return { type: 'OK', message: generateToken(data.dataValues) };
};

export default {
  register,
  login,
};
