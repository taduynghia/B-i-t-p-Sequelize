import models from '../models/index.js';

// Rate a restaurant by a user
export const rateRestaurant = async (req, res) => {
    const { user_id, res_id, amount } = req.body;
    try {
        await models.RateRes.create({ user_id, res_id, amount, date_rate: new Date() });
        res.status(200).send('Rated successfully');
    } catch (error) {
        res.status(500).send('Error rating restaurant');
    }
};

// Get ratings by user_id and/or res_id
export const getRatings = async (req, res) => {
    const { user_id, res_id } = req.query;
    try {
        const ratings = await models.RateRes.findAll({ where: { user_id, res_id } });
        res.status(200).json(ratings);
    } catch (error) {
        res.status(500).send('Error fetching ratings');
    }
};

// Create an order by a user
export const createOrder = async (req, res) => {
    const { user_id, food_id, amount, code, arr_sub_id } = req.body;
    try {
        await models.Order.create({ user_id, food_id, amount, code, arr_sub_id });
        res.status(200).send('Order created successfully');
    } catch (error) {
        res.status(500).send('Error creating order');
    }
};
