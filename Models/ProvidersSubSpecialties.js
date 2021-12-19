const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Database/ServiceProvidersDatabase');

class ProvidersSubSpeciality extends Model {};
ProvidersSubSpeciality.init({
    provider_ID: DataTypes.INTEGER,
    sub_specialty_ID: DataTypes.INTEGER
}, { sequelize, modelName: 'ProvidersSubSpeciality',timestamps: false });

module.exports = ProvidersSubSpeciality;