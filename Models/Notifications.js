const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Database/NotificationsDatabase');

class Notifications extends Model {};
Notifications.init({
    notification_task_ID:
    {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    status: DataTypes.STRING,
    user_ID: DataTypes.INTEGER,
    created_by_user_ID: DataTypes.INTEGER,
    created_date: DataTypes.DATEONLY,
    created_time: DataTypes.TIME
}, { sequelize, modelName: 'Notifications',timestamps: false });

module.exports = Notifications;