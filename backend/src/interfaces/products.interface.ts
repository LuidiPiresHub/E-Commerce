import { HttpStatus } from '../utils/mapStatus';

export interface IProdcuts {
  productName: string,
  price: number,
  category: string,
}

export interface IService {
  type: keyof typeof HttpStatus;
  message: object;
}
