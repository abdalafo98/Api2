const { Sequelize } = require('sequelize');

const Providers = new Sequelize('system-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: '../Database/Providers.sqlite',
    logging: false
  });

module.exports = Providers;