import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';
import Restaurant from './Restaurant.js';

const LikeRes = sequelize.define('LikeRes', {
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
  date_like: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'like_res',
  timestamps: false
});

User.hasMany(LikeRes, { foreignKey: 'user_id' });
Restaurant.hasMany(LikeRes, { foreignKey: 'res_id' });
LikeRes.belongsTo(User, { foreignKey: 'user_id' });
LikeRes.belongsTo(Restaurant, { foreignKey: 'res_id' });

export default LikeRes;
