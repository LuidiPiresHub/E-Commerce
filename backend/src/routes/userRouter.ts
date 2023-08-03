import { Router } from 'express';
import userController from '../controllers/userController';
import { validateLogin, validateRegister } from '../middlewares/validateUser';

const route = Router();

route.post('/register', validateRegister, userController.register);
route.post('/login', validateLogin, userController.login);

export default route;
