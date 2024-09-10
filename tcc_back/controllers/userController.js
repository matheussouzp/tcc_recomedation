const userModel = require('../models/user.js');

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

class UserController {   
    
    // Função para validar formato de email
    

    async save(req, res) {
        const { name, email, password } = req.body;
        console.log(name);
        console.log(email);
        console.log(password);
        
        // Verificar se todos os campos estão presentes
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Preencha todos os campos' });
        }

        // Validar formato do email
        if (!validateEmail(email)) { // Usar a função externa
            return res.status(400).json({ error: 'Formato de email inválido' });
        }

        try {
            // Verificar se já existe um usuário com o mesmo email
            const userExistente = await userModel.findOne({ where: { email } });
            
            if (userExistente) {
                return res.status(400).json({ error: 'O email já está em uso' });
            }
    
            // Criar um novo usuário
            const user = await userModel.create({
                name,
                email,
                password
            });
    
            res.status(201).json(user);
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            res.status(500).json({ error: 'Erro ao criar usuário' });
        }
    }
    
   async auth(req, res) {
    const { email, password } = req.body;

    // Verificar se todos os campos estão presentes
    if (!email || !password) {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }

    try {
        const user = await userModel.findOne({ where: { email } });
        
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        
        if (user.password !== password) {
            return res.status(401).json({ error: 'Senha incorreta' });
        }
        // Retorne o nome e o email do usuário na resposta de sucesso
        res.status(201).json(user);
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

    async searchByEmail(req, res) {
        const { email } = req.params; // Obtemos o e-mail dos parâmetros da requisição
        try {
            const user = await userModel.findOne({ where: { email } }); // Busca por e-mail
            if (user) {
                res.json(user); // Se o usuário for encontrado, retorna os dados
            } else {
                res.status(404).json({ error: 'Usuário não encontrado' }); // Se o usuário não for encontrado
            }
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            res.status(500).json({ error: 'Erro ao buscar usuário' }); // Erro genérico
        }
    }
    

    async update(req, res) {
        const id = req.params.id;
        const { name, email, password } = req.body;

        // Validar o formato do email se ele for alterado
        if (email && !this.validateEmail(email)) {
            return res.status(400).json({ error: 'Formato de email inválido' });
        }

        try {
            const user = await userModel.findByPk(id);
            if (user) {
                user.name = name || user.name;
                user.email = email || user.email;
                user.password = password || user.password;
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
