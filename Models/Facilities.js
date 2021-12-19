const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Database/FacilitiesDatabase');

class Facilities extends Model {};
Facilities.init({
    facility_ID:
    {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    english_name: DataTypes.STRING,
    arabic_name: DataTypes.STRING,
    start_working_hours: DataTypes.TIME,
    end_working_hours: DataTypes.TIME,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    country: DataTypes.STRING, 
    city: DataTypes.STRING, 
    opening_date: DataTypes.DATEONLY,
}, { sequelize, modelName: 'Facilities',timestamps: false });

module.exports = Facilities;


