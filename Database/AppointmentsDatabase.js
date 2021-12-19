const { Sequelize } = require('sequelize');

const Appointments = new Sequelize('system-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: '../Database/Appointments.sqlite',
    logging: false
  });

module.exports = Appointments;