import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';
import Food from './Food.js';

const Order = sequelize.define('Order', {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
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
}, {
  tableName: 'order',
  timestamps: false
});

User.hasMany(Order, { foreignKey: 'user_id' });
Food.hasMany(Order, { foreignKey: 'food_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });
Order.belongsTo(Food, { foreignKey: 'food_id' });

export default Order;
