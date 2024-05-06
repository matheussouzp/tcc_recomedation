const Sequelize = require('sequelize');
const database = require('../db.js');

const Product = database.define('product', {
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    asin: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    images: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    brand: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    product_overview: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    about_item: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    specifications: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    product_details: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    product_category: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    category_1: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    category_2: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    category_3: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    breadcrumbs: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    availability: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    five_star: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    four_star: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    three_star: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    two_star: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    one_star: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    uniqid: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    scrapedat: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = Product;
