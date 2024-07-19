import { Router } from 'express';
import { rateRestaurant, getRatings, createOrder } from '../controllers/userController.js';

const router = Router();

router.post('/rate', rateRestaurant);
router.get('/ratings', getRatings);
router.post('/order', createOrder);

export default router;
