const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Database/AppointmentsDatabase');

class AppointmentsServices extends Model {};
AppointmentsServices.init({
    status_change_ID: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    appointment_ID:DataTypes.INTEGER,
    sub_service_ID:DataTypes.INTEGER
}, { sequelize, modelName: 'AppointmentsServices',timestamps: false });

module.exports = AppointmentsServices;
