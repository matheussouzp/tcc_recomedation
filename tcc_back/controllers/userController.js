const userModel = require('../models/user.js');

class UserController {   
    
    async save(req, res) {
        const { name, password } = req.body;
        console.log(name);
        console.log(password);
        
        try {
            // Verificar se já existe um usuário com o mesmo name
            const userExistente = await userModel.findOne({ where: { name } });
            
            if (userExistente) {
                return res.status(400).json({ error: 'O name de usuário já está em uso' });
            }
    
            // Criar um novo usuário
            const user = await userModel.create({
                name,
                password
            });
    
            res.status(201).json(user);
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            res.status(500).json({ error: 'Erro ao criar usuário' });
        }
    }
    
    async auth(req, res) {    
        const { name, password } = req.body;
        
        try {
            const user = await userModel.findOne({ where: { name } });
            
            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            
            if (user.password !== password) {
                return res.status(401).json({ error: 'Senha incorreta' });
            }
            
            res.status(200).json({ token });
        } catch (error) {
            console.error('Erro ao autenticar usuário:', error);
            res.status(500).json({ error: 'Erro ao autenticar usuário' });
        }
    }

    async list(req, res) {

        try {
            const users = await userModel.findAll();
            res.json(users);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
        
    }

    async searchById(req, res) {
        const id = req.params.id;
        try {
        const user = await userModel.findByPk(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
        } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ error: 'Erro ao buscar usuário' });
        }
    }

    async update(req, res) {
        const id = req.params.id;
        const { name, password } = req.body;
        try {
        const user = await userModel.findByPk(id);
        if (user) {
            user.name = name;
            user.password = password;
            await user.save();
            res.json(user);
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
        } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }
    }

    async delete(req, res) {
        const id = req.params.id;
        try {
        const user = await userModel.findByPk(id);
        if (user) {
            await user.destroy();
            res.json({ message: 'Usuário excluído com sucesso' });
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
        } catch (error) {
        console.error('Erro ao excluir usuário:', error);
        res.status(500).json({ error: 'Erro ao excluir usuário' });
        }
    }
}

module.exports = new UserController();