//Configurações do banco de dados
const Sequelize = require('sequelize');
const sequelize = new Sequelize('tcc','root','matheus123', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306'
}); //Contrói o objeto do ORM

module.exports = sequelize;
