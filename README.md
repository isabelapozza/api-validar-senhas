# api-validar-senhas
Entendido. Você quer um `README.md` que reflita exatamente o que *você* fez, focando na criação do `index.js` e nos testes que você executou no **Shell** do Replit.

Aqui está um `README.md` reescrito com esse foco:

-----

# Microsserviço: Validador de Senhas (Node.js)

Este projeto é um microsserviço focado em lógica de negócio pura, criado em Node.js com Express.

O objetivo foi configurar um servidor (`index.js`) com um único endpoint `POST /validar-senha`. Este endpoint recebe uma senha, a processa com base em um conjunto de regras e retorna uma resposta JSON detalhada, sem usar um banco de dados.

## 🛠️ Tecnologias Utilizadas

  * **Node.js**: Ambiente de execução do servidor.
  * **Express**: Framework para criar o endpoint da API.
  * **Replit Shell**: Usado para testar e validar a API com comandos `curl`.

## 📌 Arquivo Principal

  * `index.js`: Contém todo o código do servidor Express, a rota da API e a lógica de validação da senha.

## 🚀 Como Executar

1.  Com o arquivo `index.js` pronto, o servidor é iniciado (no Replit, basta clicar em "Run").
2.  O console exibirá a mensagem `Servidor de validação rodando!`
3.  A API está pronta para receber requisições no endpoint `/validar-senha`.

## 🧪 Testes de Validação (Executados no Shell)

Os testes foram realizados diretamente no terminal **Shell** do Replit, usando `curl` para enviar requisições `POST` ao servidor.

### Regras de Validação

A lógica em `index.js` verifica 4 regras:

  * Mínimo de 8 caracteres.
  * Pelo menos 1 letra maiúscula.
  * Pelo menos 1 número.
  * Pelo menos 1 caractere especial (ex: `!@#$%^&*`).

-----

### Teste 1: Senha Inválida

Este teste comprova que a API identifica uma senha que falha em múltiplas regras.

**Comando (Shell):**

```bash
curl -X POST http://localhost:3000/validar-senha \
     -H "Content-Type: application/json" \
     -d '{ "senha": "fraca" }'
```

**Resposta JSON (Recebida):**

```json
{
  "valida": false,
  "erros": [
    "A senha precisa ter no mínimo 8 caracteres",
    "A senha precisa ter pelo menos 1 letra maiúscula",
    "A senha precisa ter pelo menos 1 número",
    "A senha precisa ter pelo menos 1 caractere especial (ex: !@#$%^&*)"
  ]
}
```

-----

### Teste 2: Senha Válida

Este teste comprova que a API identifica corretamente uma senha que atende a todos os critérios.

**Comando (Shell):**

```bash
curl -X POST http://localhost:3000/validar-senha \
     -H "Content-Type: application/json" \
     -d '{ "senha": "SenhaForte!2025" }'
```

**Resposta JSON (Recebida):**

```json
{
  "valida": true
}
```
