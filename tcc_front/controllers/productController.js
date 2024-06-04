const Product = require('../models/product.js');

class ProductController {
    async create(req, res) {
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            res.status(500).json({ error: 'Erro ao criar produto' });
        }
    }

    async findAll(req, res) {
        try {
            const products = await Product.findAll();
            res.json(products);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    }

    async findById(req, res) {
        const id = req.params.id;
        try {
            const product = await Product.findByPk(id);
            if (product) {
                res.json(product);
            } else {
                res.status(404).json({ error: 'Produto não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
            res.status(500).json({ error: 'Erro ao buscar produto' });
        }
    }

    async update(req, res) {
        const id = req.params.id;
        try {
            const [updated] = await Product.update(req.body, {
                where: { id: id }
            });
            if (updated) {
                const updatedProduct = await Product.findByPk(id);
                res.json(updatedProduct);
            } else {
                res.status(404).json({ error: 'Produto não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            res.status(500).json({ error: 'Erro ao atualizar produto' });
        }
    }

    async delete(req, res) {
        const id = req.params.id;
        try {
            const deleted = await Product.destroy({
                where: { id: id }
            });
            if (deleted) {
                res.json({ message: 'Produto excluído com sucesso' });
            } else {
                res.status(404).json({ error: 'Produto não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao excluir produto:', error);
            res.status(500).json({ error: 'Erro ao excluir produto' });
        }
    }
}

module.exports = new ProductController();
