const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoInteractionController');

// Rota para criar uma interação na tabela produtos
router.post('/produtos/interacao', produtoController.createInteraction);
// Rota para listar produtos com product_id distinto
router.get('/produtos/unicos', produtoController.findDistinctProducts);

module.exports = router;
