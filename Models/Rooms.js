const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Database/FacilitiesDatabase');

class Rooms extends Model {};
Rooms.init({
    room_ID:
    {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    english_name: DataTypes.STRING,
    arabic_name: DataTypes.STRING,
    availability: DataTypes.BOOLEAN,
    facility_ID:DataTypes.INTEGER
}, { sequelize, modelName: 'Rooms',timestamps: false });

module.exports = Rooms;
