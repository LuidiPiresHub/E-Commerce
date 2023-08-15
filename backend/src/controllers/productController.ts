import { Request, Response, NextFunction } from 'express';
import productService from '../services/productService';
import { mapStatus } from '../utils/mapStatus';

const getProducts = async (_req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { type, message } = await productService.getProducts();
    return res.status(mapStatus(type)).json({ message });
  } catch (error) {
    return next(error);
  }
};

export default {
  getProducts,
};
