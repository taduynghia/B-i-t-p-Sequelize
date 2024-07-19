import express from 'express';
import bodyParser from 'body-parser';
import restaurantRoutes from './routes/restaurantRoutes.js';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/restaurant', restaurantRoutes);
app.use('/user', userRoutes);

export default app;
