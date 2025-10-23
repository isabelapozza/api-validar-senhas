// index.js

// 1. Importar o Express
const express = require('express');

// 2. Inicializar o aplicativo Express
const app = express();
const port = 3000; // O Replit usa a porta 3000 por padrão

// 3. Middleware Essencial (para entender JSON)
app.use(express.json());

// --------------------------------------------------
// 🧠 INÍCIO DA LÓGICA DE NEGÓCIO PURA
// --------------------------------------------------

function validarRegrasDaSenha(senha) {
    const erros = [];

    if (!senha) {
        return { valida: false, erros: ["A senha não pode estar vazia."] };
    }

    // Regra 1: Mínimo de 8 caracteres
    if (senha.length < 8) {
        erros.push("A senha precisa ter no mínimo 8 caracteres");
    }

    // Regra 2: Pelo menos 1 letra maiúscula
    if (!/[A-Z]/.test(senha)) {
        erros.push("A senha precisa ter pelo menos 1 letra maiúscula");
    }

    // Regra 3: Pelo menos 1 número
    if (!/[0-9]/.test(senha)) {
        erros.push("A senha precisa ter pelo menos 1 número");
    }

    // Regra 4: Pelo menos 1 caractere especial
    if (!/[!@#$%^&*]/.test(senha)) {
        erros.push("A senha precisa ter pelo menos 1 caractere especial (ex: !@#$%^&*)");
    }

    // Verificação final
    if (erros.length > 0) {
        return {
            valida: false,
            erros: erros
        };
    } else {
        return {
            valida: true
        };
    }
}

// --------------------------------------------------
// 🧠 FIM DA LÓGICA DE NEGÓCIO
// --------------------------------------------------


// 4. Definir o Endpoint da API
app.post('/validar-senha', (req, res) => {
    // 4.1. Pegar a senha do corpo da requisição
    const { senha } = req.body;

    // 4.2. Processar na lógica de negócio
    const resultado = validarRegrasDaSenha(senha);

    // 4.3. Retornar o JSON
    if (resultado.valida) {
        return res.status(200).json(resultado);
    } else {
        // Retorna 400 (Bad Request) se a validação falhar
        return res.status(400).json(resultado);
    }
});

// 5. Iniciar o Servidor
app.listen(port, () => {
    console.log(`Servidor de validação rodando!`);
    console.log(`Abra a aba "Shell" ao lado para testar com curl.`);
});