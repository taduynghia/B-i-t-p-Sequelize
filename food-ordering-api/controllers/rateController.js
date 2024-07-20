import RateRes from './models/rateRes.js';

// Rate a restaurant
export const rateRestaurant = async (req, res) => {
  try {
    const { user_id, res_id, amount } = req.body;
    const rate = await RateRes.create({ user_id, res_id, amount, date_rate: new Date() });
    res.status(201).json(rate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get rates by restaurant
export const getRatesByRestaurant = async (req, res) => {
  try {
    const { res_id } = req.params;
    const rates = await RateRes.findAll({ where: { res_id } });
    res.json(rates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get rates by user
export const getRatesByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const rates = await RateRes.findAll({ where: { user_id } });
    res.json(rates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
