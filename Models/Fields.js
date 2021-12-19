const { Model, DataTypes } = require('sequelize');
const sequelize = require('../FieldsAndServicesDatabase');


class Field extends Model {};
Field.init({
    field_ID:
    {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    english_name: DataTypes.STRING,
    arabic_name: DataTypes.STRING
}, { sequelize, modelName: 'Fields',timestamps: false });

module.exports = Field;