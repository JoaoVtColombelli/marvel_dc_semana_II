const express = require("express")
const app = express()
const PORT = 3030

app.get("/", (req, res) => {
    res.send("<h1>Catálogo de Heróis</h1><p>Bem-vindo ao catálogo de heróis! Veja os principais heróis da Marvel e da DC.</p><p>Clique aqui para acessar a página da <a href='/marvel'>Marvel</a> <p>Clique aqui para acessar a página da <a href='/DC'>DC</a> <p><hr> <h2>Personagens em Destaque:</h2><p>Homem-Aranha (Marvel): <a href='/personagem/marvel/homem-aranha'>Clique aqui</a></p><p>Homem de Ferro (Marvel): <a href='/personagem/marvel/homem-de-ferro'>Clique aqui</a></p><p>Batman (DC): <a href='/personagem/DC/batman'>Clique aqui</a></p><p>Superman (DC): <a href='/personagem/DC/superman'>Clique aqui</a></p>")
})

app.get("/marvel", (req, res) => {
    res.send("<title>Marvel</title><h1>Universo Marvel</h1><p>Este é o universo de heróis da Marvel.</p><p>Clique aqui para acessar a página do <a href='/personagem/marvel/homem-aranha'>Homem-Aranha</a></p><p>Clique aqui para acessar a página do <a href='/personagem/marvel/homem-de-ferro'>Homem de Ferro</a></p><p>Clique aqui para retornar a <a href='/'>página inicial </a></p>")
})

app.get("/dc", (req, res) => {
    res.send("<title>DC</title><h1>Universo DC</h1><p>Este é o universo de heróis da DC.</p><p>Clique aqui para acessar a página do <a href='/personagem/DC/batman'>Batman</a></p><p>Clique aqui para acessar a página do <a href='/personagem/DC/superman'>Superman</a></p><p>Clique aqui para retornar a <a href='/'>página inicial </a></p>")
})  

app.get("/personagem/:empresa/:nome", (req, res) => {
    const nome = req.params.nome
    const empresa = req.params.empresa
    res.send(`Você está visualizando o(a) personagem ${nome} da empresa ${empresa}.`)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
