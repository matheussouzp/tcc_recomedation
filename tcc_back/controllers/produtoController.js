const Produto = require('../models/produtos_amazon');

class ProdutoController {
    async create(req, res) {
        try {
            const { name, price, description, image, brand, stars } = req.body;

            if (!name || !price || !description) {
                return res.status(400).json({ error: 'Nome, preço e descrição são obrigatórios.' });
            }

            const produto = await Produto.create({
                name, 
                price, 
                description, 
                image, 
                brand, 
                stars
            });

            res.status(201).json(produto);
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            res.status(500).json({ error: 'Erro ao criar produto' });
        }
    }

    async findAll(req, res) {
        try {
            const produtos = await Produto.findAll();
            res.status(200).json(produtos);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    }

    async findById(req, res) {
        const { id } = req.params;
        try {
            const produto = await Produto.findByPk(id);
            if (!produto) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }
            res.status(200).json(produto);
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
            res.status(500).json({ error: 'Erro ao buscar produto' });
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const { name, price, description, image, brand, stars } = req.body;

        try {
            const produto = await Produto.findByPk(id);
            if (!produto) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }

            const updatedProduto = await produto.update({ name, price, description, image, brand, stars });
            res.status(200).json(updatedProduto);
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            res.status(500).json({ error: 'Erro ao atualizar produto' });
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            const produto = await Produto.findByPk(id);
            if (!produto) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }

            await produto.destroy();
            res.status(204).send(); // Resposta sem conteúdo
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
            res.status(500).json({ error: 'Erro ao deletar produto' });
        }
    }
}

module.exports = new ProdutoController();
