import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Restaurant = sequelize.define('Restaurant', {
    res_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    res_name: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    desc: {
        type: DataTypes.STRING
    }
}, { tableName: 'restaurant' });

export default Restaurant;
