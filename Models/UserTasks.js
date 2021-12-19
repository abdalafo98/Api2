const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Database/TasksDatabase');

class UserTasks extends Model {};
UserTasks.init({
    user_task_ID:
    {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    status: DataTypes.STRING,
    notes: DataTypes.STRING,
    user_ID: DataTypes.INTEGER,
    created_by_user_ID: DataTypes.INTEGER,
    created_date: DataTypes.DATEONLY,
    created_time: DataTypes.TIME
}, { sequelize, modelName: 'UserTasks',timestamps: false });

module.exports = UserTasks;