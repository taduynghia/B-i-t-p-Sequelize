import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Food from './Food.js';

const SubFood = sequelize.define('SubFood', {
  sub_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  sub_name: {
    type: DataTypes.STRING
  },
  sub_price: {
    type: DataTypes.FLOAT
  },
  food_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Food,
      key: 'food_id'
    }
  }
}, {
  tableName: 'sub_food',
  timestamps: false
});

Food.hasMany(SubFood, { foreignKey: 'food_id' });
SubFood.belongsTo(Food, { foreignKey: 'food_id' });

export default SubFood;
