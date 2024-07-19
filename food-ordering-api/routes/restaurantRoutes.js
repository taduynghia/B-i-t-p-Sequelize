import { Router } from 'express';
import { likeRestaurant, unlikeRestaurant, getLikes } from '../controllers/restaurantController.js';

const router = Router();

router.post('/like', likeRestaurant);
router.post('/unlike', unlikeRestaurant);
router.get('/likes', getLikes);

export default router;