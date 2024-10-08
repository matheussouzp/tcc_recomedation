const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Produto = sequelize.define('produtos_amazon', {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  asin: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
  },
  brand: {
    type: DataTypes.STRING,
  },
  five_star: {
    type: DataTypes.STRING,
  },
  four_star: {
    type: DataTypes.STRING,
  },
  three_star: {
    type: DataTypes.STRING,
  },
  two_star: {
    type: DataTypes.STRING,
  },
  one_star: {
    type: DataTypes.STRING,
  },
  scrapedAt: {
    type: DataTypes.STRING,
  },
  imageSrc: {
    type: DataTypes.STRING,
  }
});

module.exports = Produto;
