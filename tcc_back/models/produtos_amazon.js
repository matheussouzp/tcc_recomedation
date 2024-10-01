const Sequelize = require('sequelize');
const database = require('../db.js');

const Produto = database.define('produto', {
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  asin: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.STRING,
  },
  brand: {
    type: Sequelize.STRING,
  },
  five_star: {
    type: Sequelize.STRING,
  },
  four_star: {
    type: Sequelize.STRING,
  },
  three_star: {
    type: Sequelize.STRING,
  },
  two_star: {
    type: Sequelize.STRING,
  },
  one_star: {
    type: Sequelize.STRING,
  },
  scrapedAt: {
    type: Sequelize.STRING,
  },
  imageSrc: {
    type: Sequelize.STRING,
  }
}, {
  tableName: 'produtos_amazon', // Nome da tabela no banco de dados
  timestamps: false // Desabilitar colunas createdAt e updatedAt
});

module.exports = Produto;
