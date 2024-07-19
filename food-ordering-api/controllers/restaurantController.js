import models from '../models/index.js';

export const likeRestaurant = async (req, res) => {
    const { user_id, res_id } = req.body;
    try {
        await models.LikeRes.create({ user_id, res_id, date_like: new Date() });
        res.status(200).send('Liked successfully');
    } catch (error) {
        res.status(500).send('Error liking restaurant');
    }
};

export const unlikeRestaurant = async (req, res) => {
    const { user_id, res_id } = req.body;
    try {
        await models.LikeRes.destroy({ where: { user_id, res_id } });
        res.status(200).send('Unliked successfully');
    } catch (error) {
        res.status(500).send('Error unliking restaurant');
    }
};

export const getLikes = async (req, res) => {
    const { user_id, res_id } = req.query;
    try {
        const likes = await models.LikeRes.findAll({ where: { user_id, res_id } });
        res.status(200).json(likes);
    } catch (error) {
        res.status(500).send('Error fetching likes');
    }
};
