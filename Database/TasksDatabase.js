const { Sequelize } = require('sequelize');

const Tasks = new Sequelize('system-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: '../Database/Tasks.sqlite',
    logging: false
  });

module.exports = Tasks;