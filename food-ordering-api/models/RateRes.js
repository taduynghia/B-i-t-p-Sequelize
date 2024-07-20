import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './user.js';
import Restaurant from './restaurant.js';

const RateRes = sequelize.define('RateRes', {
  id: {
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
}, {
  tableName: 'rate_res',
  timestamps: false
});

User.hasMany(RateRes, { foreignKey: 'user_id' });
Restaurant.hasMany(RateRes, { foreignKey: 'res_id' });
RateRes.belongsTo(User, { foreignKey: 'user_id' });
RateRes.belongsTo(Restaurant, { foreignKey: 'res_id' });

export default RateRes;
