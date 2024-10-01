const { Produto } = require('../models/produtos_amazonOLD'); // Certifique-se de que o caminho está correto

class ProdutoController {
    async create(req, res) {
        try {
            const produto = await Produto.create(req.body);
            res.status(201).json(produto);
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            res.status(500).json({ error: 'Erro ao criar produto' });
        }
    }

    async findAll(req, res) {
        try {
            const produtos = await Produto.findAll();
            res.json(produtos);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    }

    async findById(req, res) {
        const id = req.params.id;
        try {
            const produto = await Produto.findByPk(id);
            if (produto) {
                res.json(produto);
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
            const [updated] = await Produto.update(req.body, {
                where: { id: id }
            });
            if (updated) {
                const updatedProduto = await Produto.findByPk(id);
                res.json(updatedProduto);
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
            const deleted = await Produto.destroy({
                where: { id: id }
            });
            if (deleted) {
                res.status(204).json();
            } else {
                res.status(404).json({ error: 'Produto não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
            res.status(500).json({ error: 'Erro ao deletar produto' });
        }
    }
}

module.exports = new ProdutoController();
