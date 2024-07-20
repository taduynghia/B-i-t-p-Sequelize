import express from 'express';
import bodyParser from 'body-parser';
import restaurantRoutes from './routes/restaurantRoutes.js';
import userRoutes from './routes/userRoutes.js';
import likeRoutes from './routes/likeRoutes.js';
import rateRoutes from './routes/rateRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();

app.use(bodyParser.json());

app.use('/restaurant', restaurantRoutes);
app.use('/user', userRoutes);
app.use('/like', likeRoutes);
app.use('/rate', rateRoutes);
app.use('/order', orderRoutes);

export default app;
