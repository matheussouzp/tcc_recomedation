const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para salvar um novo usuário
router.post('/', userController.save);
// Rota para autenticação de usuário
router.post('/auth', userController.auth);
// Rota para listar todos os usuários
router.get('/', userController.list);
// Rota para buscar um usuário por ID
router.get('/:id', userController.searchById);
// Rota para atualizar um usuário por ID
router.put('/:id', userController.update);
// Rota para excluir um usuário por ID
router.delete('/:id', userController.delete);

module.exports = router;
