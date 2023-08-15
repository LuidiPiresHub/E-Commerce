import { Router } from 'express';
import productController from '../controllers/productController';

const route = Router();

route.get('/', productController.getProducts);

export default route;
