const Sequelize = require('sequelize');
const database = require('../db.js');

const Categoria = database.define('categoria', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  parent_primary_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    // references: {
    //   model: 'categorias', // nome da tabela
    //   key: 'id' // chave estrangeira
    // }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Categoria;
