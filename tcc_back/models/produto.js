const Sequelize = require('sequelize');
const database = require('../db.js');

const Produto = database.define('produto', {
  event_time: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  event_type: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  product_id: {
    type: Sequelize.BIGINT,
    allowNull: true,
  },
  category_id: {
    type: Sequelize.BIGINT,
    allowNull: true,
  },
  category_code: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
  user_id: {
    type: Sequelize.BIGINT,
    allowNull: true,
  },
  user_session: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  imagesrc: {
    type: Sequelize.STRING,
    allowNull: true,
  },
}, {
  tableName: 'produtos_amazon',  // ou o nome da tabela que você está usando
  timestamps: false,  // Se você não estiver usando campos de data automáticos
});

// Exportar Produto sem definir associações aqui
module.exports = Produto;
