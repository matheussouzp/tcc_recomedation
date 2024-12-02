const Sequelize = require('sequelize'); 
const database = require('../db.js');

const Produto = database.define('produto', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true, // Define como chave primária
  },
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
  },
  user_session: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
  },
}, {
  tableName: 'produtos',
  timestamps: false, // Mantém createdAt e updatedAt automáticos
});

module.exports = Produto;
