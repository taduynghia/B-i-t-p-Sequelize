import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const FoodType = sequelize.define('FoodType', {
    type_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type_name: {
        type: DataTypes.STRING
    }
}, { tableName: 'food_type' });

export default FoodType;
