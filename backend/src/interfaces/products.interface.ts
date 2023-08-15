import { HttpStatus } from '../utils/mapStatus';

export interface IProducts {
  id: number;
  productName: string;
  price: number;
  category: string;
}

export interface IService {
  type: keyof typeof HttpStatus;
  message: string | IProducts[];
}
