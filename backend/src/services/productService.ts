import Products from '../database/models/products.models';
import { IService } from '../interfaces/products.interface';

const getProducts = async (): Promise<IService> => {
  const products = await Products.findAll();
  if (products) {
    return { type: 'OK', message: products };
  }
  return { type: 'NOT_FOUND', message: 'Product not found' };
};

export default {
  getProducts,
};
