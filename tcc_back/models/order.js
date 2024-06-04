const Sequelize = require('sequelize');
const database = require('../db.js');
const User = require('./user'); // Importando o modelo User para a FK
const Payment = require('./payment'); // Importando o modelo Payment para a FK (assumindo que você tenha um modelo de Payment)

const Order = database.define('order', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  payment_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Payment,
      key: 'id'
    }
  }
});

module.exports = Order;
