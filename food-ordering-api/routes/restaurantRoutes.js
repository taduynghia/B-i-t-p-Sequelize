import express from 'express';
import { rateRestaurant, getRatings, createOrder } from '../controllers/restaurantController.js';

const router = express.Router();

router.post('/rate', rateRestaurant);
router.get('/ratings', getRatings);
router.post('/order', createOrder);

export default router;
