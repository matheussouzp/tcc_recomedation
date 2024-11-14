const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Rota para adicionar item ao carrinho
router.post('/add', cartController.addToCart);
// Rota para remover item do carrinho
router.delete('/remove/:cartItemId', cartController.removeFromCart);
// Rota para atualizar a quantidade de um item no carrinho
router.put('/update/:itemId', cartController.updateQuantity); // Nova rota para atualizar a quantidade
// Rota para obter itens do carrinho
router.get('/:userId', cartController.getCartItems);
// Rota para finalizar compra
router.post('/checkout', cartController.checkout);

router.get('/orders/:id', cartController.getOrdersByUser);

module.exports = router;
