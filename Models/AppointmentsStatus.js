const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Database/AppointmentsDatabase');

class AppointmentsStatus extends Model {};
AppointmentsStatus.init({
    status_change_ID: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    appointment_ID:DataTypes.INTEGER,
    changed_status:DataTypes.STRING,
    changed_Date:DataTypes.DATEONLY,
    changed_by_user_ID:DataTypes.INTEGER,
    reason:DataTypes.STRING
}, { sequelize, modelName: 'AppointmentsStatus',timestamps: false });

module.exports = AppointmentsStatus;
