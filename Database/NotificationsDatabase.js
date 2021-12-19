const { Sequelize } = require('sequelize');

const Notifications = new Sequelize('system-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: '../Database/Notifications.sqlite',
    logging: false
  });

module.exports = Notifications;