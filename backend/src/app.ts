import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRouter';
import productRouter from './routes/productRouter';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use('/products', productRouter);
app.use(errorHandler);

export default app;
