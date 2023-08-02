import { Router } from 'express';
import userController from '../controllers/userController';

const route = Router();

route.post('/register', userController.createUser);
route.post('/login', userController.login);

export default route;
