const CartItem = require('../models/cartItem');
const Order = require('../models/order');
const Product = require('../models/produto');
const OrderItem = require('../models/OrderItem');

// Adiciona item ao carrinho
exports.addToCart = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        // Verifica se o item já está no carrinho
        let cartItem = await CartItem.findOne({
            where: { user_id: userId, product_id: productId },
        });

        if (cartItem) {
            // Atualiza a quantidade se o item já estiver no carrinho
            cartItem.quantity += quantity;
            await cartItem.save();
        } else {
            // Cria novo item no carrinho
            cartItem = await CartItem.create({
                user_id: userId,
                product_id: productId,
                quantity,
            });
        }

        res.status(200).json(cartItem);
    } catch (error) {
        console.error('Erro ao adicionar item ao carrinho:', error);
        res.status(500).json({ error: 'Erro ao adicionar item ao carrinho.' });
    }
};

// Remove item do carrinho
exports.removeFromCart = async (req, res) => {
    try {
        const { cartItemId } = req.params;
        const deletedRows = await CartItem.destroy({ where: { id: cartItemId } });

        if (deletedRows === 0) {
            return res.status(404).json({ error: 'Item não encontrado.' });
        }

        res.status(200).json({ message: 'Item removido do carrinho.' });
    } catch (error) {
        console.error('Erro ao remover item do carrinho:', error);
        res.status(500).json({ error: 'Erro ao remover item do carrinho.' });
    }
};

// Atualiza a quantidade de um item no carrinho
exports.updateQuantity = async (req, res) => {
    try {
        const { itemId } = req.params;
        const { quantity } = req.body;

        const cartItem = await CartItem.findByPk(itemId);
        if (!cartItem) {
            return res.status(404).json({ error: 'Item não encontrado.' });
        }

        cartItem.quantity = quantity;
        await cartItem.save();
        res.status(200).json(cartItem);
    } catch (error) {
        console.error('Erro ao atualizar a quantidade:', error);
        res.status(500).json({ error: 'Não foi possível atualizar a quantidade.' });
    }
};

// Finaliza compra
exports.checkout = async (req, res) => {
    try {
        const { userId } = req.body;
        const cartItems = await CartItem.findAll({ where: { user_id: userId }, include: [Product] });

        if (!cartItems.length) {
            return res.status(400).json({ error: 'Carrinho está vazio.' });
        }

        // Cria o pedido (Order)
        const order = await Order.create({ user_id: userId });

        // Preenche os itens do pedido (OrderItem) com base nos itens do carrinho
        for (const item of cartItems) {
            const price = parseFloat(item.produto.price.replace('$', '').replace(',', ''));

            await OrderItem.create({
                order_id: order.id,
                product_id: item.produto.id,
                quantity: item.quantity,
                price: price
            });
        }

        // Limpa o carrinho após finalizar a compra
        await CartItem.destroy({ where: { user_id: userId } });

        res.status(200).json({ message: 'Compra finalizada com sucesso.', order });
    } catch (error) {
        console.error('Erro ao finalizar a compra:', error);
        res.status(500).json({ error: 'Erro ao finalizar a compra.' });
    }
};

// Obtém itens do carrinho
exports.getCartItems = async (req, res) => {
    try {
        const { userId } = req.params;

        const cartItems = await CartItem.findAll({
            where: { user_id: userId },
            include: [Product], // Inclui detalhes do produto
        });

        return res.status(200).json(cartItems.length ? cartItems : []);
    } catch (error) {
        console.error('Erro ao buscar itens do carrinho:', error);
        res.status(500).json({ error: 'Erro ao buscar itens do carrinho.' });
    }
};

// Obtém pedidos do usuário
exports.getOrders = async (req, res) => {
    try {
        const { userId } = req.params;

        const orders = await Order.findAll({
            where: { user_id: userId },
            include: [{
                model: OrderItem,
                include: [Product],
            }],
        });

        res.status(200).json(orders.length ? orders : []);
    } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
        res.status(500).json({ error: 'Erro ao buscar pedidos.' });
    }
};

// Outra forma de obter pedidos por usuário (duplicada, pode remover ou substituir getOrders)
exports.getOrdersByUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const orders = await Order.findAll({
            where: { user_id: userId },
            include: [
                {
                    model: OrderItem,
                    include: [Product]
                }
            ]
        });

        res.status(200).json(orders || []);
    } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
        res.status(500).json({ error: 'Erro ao buscar pedidos.' });
    }
};
