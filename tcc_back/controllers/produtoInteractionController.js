const Produto = require('../models/produto'); // Model relacionado à tabela `produtos`
const { Sequelize } = require('sequelize'); // Importando Sequelize para garantir o uso correto das funções

class produtoInteractionController {
    
    // Função para validar dados de entrada
    validateProductData({ event_time, event_type, product_id, category_id, category_code, brand, price, user_id, user_session, titulo, descricao, imagesrc }) {
        if (!event_time || !event_type || !product_id || !category_id || !category_code || !brand || !price || !user_id || !user_session || !titulo || !descricao || !imagesrc) {
            return 'Todos os campos são obrigatórios.';
        }
        return null; // Se tudo estiver ok
    }

    // Criar uma nova interação de produto
    async createInteraction(req, res) {
        const { event_time, event_type, product_id, category_id, category_code, brand, price, user_id, user_session, titulo, descricao, imagesrc } = req.body;

        // Validar dados de entrada
        const validationError = this.validateProductData(req.body);
        if (validationError) {
            return res.status(400).json({ error: validationError });
        }

        try {
            const newProduto = Produto.build({
                event_time,
                event_type,
                product_id,
                category_id,
                category_code,
                brand,
                price,
                user_id,
                user_session,
                titulo,
                descricao,
                imagesrc
            });

            await newProduto.save();

            res.status(201).json(newProduto);
        } catch (error) {
            console.error('Erro ao criar interação do produto:', error);
            res.status(500).json({ error: 'Erro ao criar interação do produto' });
        }
    }

    // Método para listar produtos com `product_id` distinto
    async findDistinctProducts(req, res) {
        try {
            const produtos = await Produto.findAll({
                attributes: [
                    [Sequelize.fn('DISTINCT', Sequelize.col('product_id')), 'product_id'],
                    'event_time',
                    'event_type',
                    'category_id',
                    'category_code',
                    'brand',
                    'price',
                    'user_id',
                    'user_session',
                    'titulo',
                    'descricao',
                    'imagesrc'
                ],
                limit: 100, // Limitar a 100 registros
                order: [
                    ['event_time', 'DESC'] // Opcional: ordena por data de evento, caso necessário
                ]
            });

            res.status(200).json(produtos);
        } catch (error) {
            console.error('Erro ao listar produtos distintos:', error);
            res.status(500).json({ error: 'Erro ao listar produtos distintos' });
        }
    }

    // Método para listar todos os produtos
    async list(req, res) {
        try {
            const produtos = await Produto.findAll();
            res.status(200).json(produtos);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    }

    // Buscar produto por ID
    async searchById(req, res) {
        const { id } = req.params;
        try {
            const produto = await Produto.findByPk(id);
            if (produto) {
                res.status(200).json(produto);
            } else {
                res.status(404).json({ error: 'Produto não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
            res.status(500).json({ error: 'Erro ao buscar produto' });
        }
    }

    // Buscar produto por 'product_id'
    async searchByProductId(req, res) {
        const { product_id } = req.params;
        try {
            const produto = await Produto.findOne({ where: { product_id } });
            if (produto) {
                res.status(200).json(produto);
            } else {
                res.status(404).json({ error: 'Produto não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao buscar produto por ID:', error);
            res.status(500).json({ error: 'Erro ao buscar produto' });
        }
    }

    // Atualizar produto
    async update(req, res) {
        const { id } = req.params;
        const { event_time, event_type, product_id, category_id, category_code, brand, price, user_id, user_session, titulo, descricao, imagesrc } = req.body;

        // Validar dados de entrada
        const validationError = this.validateProductData(req.body);
        if (validationError) {
            return res.status(400).json({ error: validationError });
        }

        try {
            const produto = await Produto.findByPk(id);
            if (produto) {
                produto.event_time = event_time || produto.event_time;
                produto.event_type = event_type || produto.event_type;
                produto.product_id = product_id || produto.product_id;
                produto.category_id = category_id || produto.category_id;
                produto.category_code = category_code || produto.category_code;
                produto.brand = brand || produto.brand;
                produto.price = price || produto.price;
                produto.user_id = user_id || produto.user_id;
                produto.user_session = user_session || produto.user_session;
                produto.titulo = titulo || produto.titulo;
                produto.descricao = descricao || produto.descricao;
                produto.imagesrc = imagesrc || produto.imagesrc;
                await produto.save();
                res.status(200).json(produto);
            } else {
                res.status(404).json({ error: 'Produto não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            res.status(500).json({ error: 'Erro ao atualizar produto' });
        }
    }

    // Excluir produto
    async delete(req, res) {
        const { id } = req.params;
        try {
            const produto = await Produto.findByPk(id);
            if (produto) {
                await produto.destroy();
                res.status(200).json({ message: 'Produto excluído com sucesso' });
            } else {
                res.status(404).json({ error: 'Produto não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao excluir produto:', error);
            res.status(500).json({ error: 'Erro ao excluir produto' });
        }
    }
}

module.exports = new produtoInteractionController();
