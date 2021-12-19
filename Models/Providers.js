const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Database/ServiceProvidersDatabase');

class Providers extends Model {};
Providers.init({
    provider_ID:
    {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    english_name: DataTypes.STRING,
    arabic_name: DataTypes.STRING,
    national_ID: DataTypes.STRING,
    country: DataTypes.STRING, 
    city: DataTypes.STRING, 
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    date_of_birth: DataTypes.DATEONLY,
    address: DataTypes.STRING,
    speciality_ID: DataTypes.INTEGER
}, { sequelize, modelName: 'Providers',timestamps: false });

module.exports = Providers;