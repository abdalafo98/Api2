const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Database/AppointmentsDatabase');

class Appointments extends Model {};
Appointments.init({
appointment_ID:
{
    type:DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
consumer_ID:DataTypes.INTEGER,
appointment_Date: DataTypes.DATEONLY,
start_Time: DataTypes.TIME,
end_Time: DataTypes.TIME,
first_provider_ID:DataTypes.INTEGER, 
second_provider_ID:DataTypes.INTEGER, 
appointment_type: DataTypes.STRING,
appointment_current_status: DataTypes.STRING,
room_ID:DataTypes.INTEGER,
service_ID:DataTypes.INTEGER,
sub_service_ID:DataTypes.INTEGER,
created_by_user_ID:DataTypes.INTEGER,
priority:DataTypes.INTEGER,
created_date: DataTypes.DATEONLY, 
total_original_amount: DataTypes.DOUBLE,
total_final_amount: DataTypes.DOUBLE,
total_paid: DataTypes.DOUBLE
}, { sequelize, modelName: 'Appointments',timestamps: false });

module.exports = Appointments;
