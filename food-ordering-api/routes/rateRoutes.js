import express from 'express';
import { rateRestaurant, getRatesByRestaurant, getRatesByUser } from '../controllers/rateController.js';

const router = express.Router();

router.post('/rate', rateRestaurant);
router.get('/restaurant/:res_id', getRatesByRestaurant);
router.get('/user/:user_id', getRatesByUser);

export default router;
