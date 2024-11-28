const Sequelize = require('sequelize'); 
const database = require('../db.js');

const Produto = database.define('produto', {
  event_time: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  event_type: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  product_id: {
    type: Sequelize.BIGINT,
    allowNull: false,
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
    allowNull: false,
    primaryKey: true, // Definindo como parte da chave primária
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
  tableName: 'produtos',
  timestamps: true, // Se você quiser manter createdAt e updatedAt
});

module.exports = Produto;
