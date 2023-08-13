import { Request, Response, NextFunction } from 'express';
import productService from '../services/productService';

const getProducts = async (_req: Request, res: Response, _next: NextFunction): Promise<Response | void> => {
  const { type, message } = await productService.getProducts();
  if (type) {
    return res.status(200).json({ message });
  } else {
    return res.status(404).json({ message: 'Product not found' });
  }
};

export default {
  getProducts,
};
