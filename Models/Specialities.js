const { Model, DataTypes } = require('sequelize');
const sequelize = require('../FieldsAndServicesDatabase');


class Specialities extends Model {};
Specialities.init({
    speciality_ID:
    {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    english_name: DataTypes.STRING,
    arabic_name: DataTypes.STRING,
    field_ID: DataTypes.INTEGER,
}, { sequelize, modelName: 'Specialities',timestamps: false });

module.exports = Specialities;