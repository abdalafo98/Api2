const { Sequelize } = require('sequelize');

const FieldsServices = new Sequelize('system-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: '../Database/FieldsServices.sqlite',
    logging: false
  });

module.exports = FieldsServices;