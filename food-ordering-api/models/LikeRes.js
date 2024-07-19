import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';
import Restaurant from './Restaurant.js';

const LikeRes = sequelize.define('LikeRes', {
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
    date_like: {
        type: DataTypes.DATE
    }
}, { tableName: 'like_res' });

export default LikeRes;
