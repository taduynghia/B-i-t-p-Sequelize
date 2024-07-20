import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const FoodType = sequelize.define('FoodType', {
  type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type_name: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'food_type',
  timestamps: false
});

export default FoodType;
