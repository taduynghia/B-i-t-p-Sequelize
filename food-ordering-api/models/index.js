import sequelize from '../config/database.js';
import User from './User.js';
import Restaurant from './Restaurant.js';
import Order from './Order.js';
import LikeRes from './LikeRes.js';
import RateRes from './RateRes.js';
import Food from './Food.js';
import SubFood from './SubFood.js';
import FoodType from './FoodType.js';

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
