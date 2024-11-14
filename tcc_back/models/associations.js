// models/associations.js
const Produto = require('./produtos_amazon');
const CartItem = require('./cartItem');
const User = require('./user'); // Se você tiver um modelo User

// Definindo as associações
Produto.hasMany(CartItem, { foreignKey: 'product_id', sourceKey: 'id' });
CartItem.belongsTo(Produto, { foreignKey: 'product_id' });
CartItem.belongsTo(User, { foreignKey: 'user_id' }); // Se CartItem também se relaciona com User

// Você pode adicionar mais associações aqui, se necessário

module.exports = { Produto, CartItem, User }; // Exporte os modelos, se precisar
