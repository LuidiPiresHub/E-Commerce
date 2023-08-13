import Products from '../database/models/products.models';

const getProducts = async () => {
  const products = await Products.findAll();
  if (products) {
    return { type: 'OK', message: products };
  }
  return { type: 'error', message: 'Product not found' };
};

export default {
  getProducts,
};
