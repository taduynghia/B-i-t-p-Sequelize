import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';
import Restaurant from './Restaurant.js';

const RateRes = sequelize.define('RateRes', {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    res_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Restaurant,
            key: 'res_id'
        }
    },
    amount: {
        type: DataTypes.INTEGER
    },
    date_rate: {
        type: DataTypes.DATE
    }
}, { tableName: 'rate_res' });

export default RateRes;
