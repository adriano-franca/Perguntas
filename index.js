const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;

    var produtos = [
        {nome: "Doritos", preco: 14},
        {nome: "Ruffles", preco: 11},
        {nome: "Coca-Cola", preco: 5},
        {nome: "Picanha", preco: 30},
        {nome: "Monster", preco: 8},
        {nome: "Arroz", preco: 16}
    ]

    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "PETComp",
        participantes: 12,
        msg: exibirMsg,
        produtos: produtos
    });
});



app.listen(8080, () => {
    console.log("Aplicação rodando");
});