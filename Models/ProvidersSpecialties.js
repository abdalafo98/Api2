const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Database/ServiceProvidersDatabase');

class ProvidersSpecialities extends Model {};
ProvidersSpecialities.init({
    provider_ID: DataTypes.INTEGER,
    specialty_ID: DataTypes.INTEGER
}, { sequelize, modelName: 'ProvidersSpecialities',timestamps: false });

module.exports = ProvidersSpecialities;