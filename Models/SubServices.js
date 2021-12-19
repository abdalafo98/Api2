const { Model, DataTypes } = require('sequelize');
const sequelize = require('../FieldsAndServicesDatabase');


class SubService extends Model {};
SubService.init({
    sub_service_ID:
    {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    english_name: DataTypes.STRING,
    arabic_name: DataTypes.STRING,
    service_ID: DataTypes.INTEGER,
}, { sequelize, modelName: 'SubServices',timestamps: false });

module.exports = SubService;