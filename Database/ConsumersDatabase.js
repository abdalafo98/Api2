const { Sequelize } = require('sequelize');

const Consumers = new Sequelize('system-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: '../Database/Consumers.sqlite',
    logging: false
  });

module.exports = Consumers;