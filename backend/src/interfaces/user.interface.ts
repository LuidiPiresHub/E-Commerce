import { HttpStatus } from '../utils/mapStatus';

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister extends ILogin {
  name: string;
}

export interface IService {
  type: keyof typeof HttpStatus;
  message: string;
}
