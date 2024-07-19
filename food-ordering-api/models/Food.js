import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import FoodType from './FoodType.js';

const Food = sequelize.define('Food', {
    food_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    food_name: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    },
    desc: {
        type: DataTypes.STRING
    },
    type_id: {
        type: DataTypes.INTEGER,
        references: {
            model: FoodType,
            key: 'type_id'
        }
    }
}, { tableName: 'food' });

export default Food;
