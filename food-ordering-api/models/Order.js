import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';
import Food from './Food.js';

const Order = sequelize.define('Order', {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    food_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Food,
            key: 'food_id'
        }
    },
    amount: {
        type: DataTypes.INTEGER
    },
    code: {
        type: DataTypes.STRING
    },
    arr_sub_id: {
        type: DataTypes.STRING
    }
}, { tableName: 'order' });

export default Order;
