const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Database/TasksDatabase');

class SharedTasks extends Model {};
SharedTasks.init({
    shared_task_ID:
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
    field_ID: DataTypes.INTEGER,
    created_by_user_ID: DataTypes.INTEGER,
    created_date: DataTypes.DATEONLY,
    created_time: DataTypes.TIME
}, { sequelize, modelName: 'SharedTasks',timestamps: false });

module.exports = SharedTasks;