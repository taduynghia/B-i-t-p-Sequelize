import Order from './models/order.js';

// Place an order
export const placeOrder = async (req, res) => {
  try {
    const { user_id, food_id, amount, code, arr_sub_id } = req.body;
    const order = await Order.create({ user_id, food_id, amount, code, arr_sub_id });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
