const express = require('express');
const router = express.Router(); // corrigido

let users = [];

// rota para cadastro de usuário
router.post('/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;
    console.log('Nome: ', nome);
    console.log('Email: ', email);
    console.log('Senha: ', senha);

    if (!nome || !email || !senha) {
        return res.status(400).json({ message: 'Nome, email e senha são obrigatórios!' });
    }

    // Criar novo usuário e adicionar ao array
    const newUser = { nome, email, senha };
    users.push(newUser);

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user: newUser });
});

// rota para consulta de usuários
router.get('/consulta', (req, res) => {
    if (users.length === 0) { // corrigido
        return res.status(400).json({ message: 'Nenhum usuário encontrado!' });
    }

    res.status(200).json(users); // retorna array de usuários
});

module.exports = router;
