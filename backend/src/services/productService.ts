import Products from '../database/models/products.models';
import { IService } from '../interfaces/products.interface';

const getProducts = async (): Promise<IService> => {
  const data = await Products.findAll();
  const products = data.map(({ dataValues }) => dataValues);
  if (products) {
    return { type: 'OK', message: products };
  }
  return { type: 'NOT_FOUND', message: 'Product not found' };
};

export default {
  getProducts,
};
