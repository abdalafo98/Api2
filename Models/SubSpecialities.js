const { Model, DataTypes } = require('sequelize');
const sequelize = require('../FieldsAndServicesDatabase');


class SubSpecialities extends Model {};
SubSpecialities.init({
    sub_speciality_ID:
    {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    english_name: DataTypes.STRING,
    arabic_name: DataTypes.STRING,
    speciality_ID: DataTypes.INTEGER,
}, { sequelize, modelName: 'SubSpecialities',timestamps: false });

module.exports = SubSpecialities;