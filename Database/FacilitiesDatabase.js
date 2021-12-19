const { Sequelize } = require('sequelize');

const Facilities = new Sequelize('system-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: '../Database/Facilities.sqlite',
    logging: false
  });

module.exports = Facilities;