const Sequelize = require('sequelize');
const database = require('../db.js');
const User = require('./user'); // Importando o modelo User para a FK
const Produto = require('./produtos_amazon.js'); // Importando o modelo Produto

const CartItem = database.define('cartItem', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Produto,
      key: 'id',
    },
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

// Definindo a associação após a definição do modelo
CartItem.belongsTo(Produto, { foreignKey: 'product_id' });

module.exports = CartItem;
