import { Router } from 'express';
import transactionRouter from './transaction.routes';

const routes = Router();

routes.use('/transactions', transactionRouter);
// routes.get('/transactions', transactionRouter);

export default routes;
