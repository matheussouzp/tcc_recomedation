const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Rota para salvar um novo produto
router.post('/', produtoController.create);
// Rota para listar todos os produtos
router.get('/', produtoController.findAll);
// Rota para buscar um produto por ID
router.get('/:id', produtoController.findById);
// Rota para atualizar um produto por ID
router.put('/:id', produtoController.update);
// Rota para excluir um produto por ID
router.delete('/:id', produtoController.delete);

module.exports = router;
