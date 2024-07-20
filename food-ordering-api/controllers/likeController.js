import LikeRes from './models/likeRes.js';

// Like a restaurant
export const likeRestaurant = async (req, res) => {
  try {
    const { user_id, res_id } = req.body;
    const like = await LikeRes.create({ user_id, res_id, date_like: new Date() });
    res.status(201).json(like);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Unlike a restaurant
export const unlikeRestaurant = async (req, res) => {
  try {
    const { user_id, res_id } = req.body;
    const like = await LikeRes.destroy({ where: { user_id, res_id } });
    if (like) {
      res.status(204).json({ message: 'Unliked successfully' });
    } else {
      res.status(404).json({ message: 'Like not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get likes by restaurant
export const getLikesByRestaurant = async (req, res) => {
  try {
    const { res_id } = req.params;
    const likes = await LikeRes.findAll({ where: { res_id } });
    res.json(likes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get likes by user
export const getLikesByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const likes = await LikeRes.findAll({ where: { user_id } });
    res.json(likes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
