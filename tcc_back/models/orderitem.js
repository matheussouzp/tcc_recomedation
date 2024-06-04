const Sequelize = require('sequelize');
const database = require('../db.js');
const Order = require('./order'); // Importando o modelo Order para a FK
const Product = require('./product'); // Importando o modelo Product para a FK (assumindo que você tenha um modelo de Product)

const OrderItem = database.define('orderItem', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  order_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Order,
      key: 'id'
    }
  },
  product_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'id'
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1 // Pode ajustar o valor padrão conforme necessário
  },
  price: {
    type: Sequelize.DECIMAL(10, 2), // DECIMAL com 10 dígitos e 2 casas decimais para representar o preço
    allowNull: false
  }
});

module.exports = OrderItem;
