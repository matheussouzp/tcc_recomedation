const Sequelize = require('sequelize');
const database = require('../db.js');

const Payment = database.define('payment', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Payment;
