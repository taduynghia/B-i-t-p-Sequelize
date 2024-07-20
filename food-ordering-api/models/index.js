import sequelize from '../config/database.js';
import User from './user.js';
import Restaurant from './restaurant.js';
import Order from './order.js';
import LikeRes from './likeRes.js';
import RateRes from './rateRes.js';
import Food from './food.js';
import SubFood from './subFood.js';
import FoodType from './foodType.js';

const models = {
    User,
    Restaurant,
    Order,
    LikeRes,
    RateRes,
    Food,
    SubFood,
    FoodType
};

Object.values(models).forEach(model => {
    if (model.associate) {
        model.associate(models);
    }
});

sequelize.sync().then(() => {
    console.log('Database & tables created!');
});

export default models;
