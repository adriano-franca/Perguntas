const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    var nome = "Adriano";
    var lang = "React Native"
    res.render("index", {nome: nome, lang: lang, empresa: "PETComp", participantes: 12});
});



app.listen(8080, () => {
    console.log("Aplicação rodando");
});