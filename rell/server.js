const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

//configurando estilo
server.use(express.static('public'));

//Nunjucks
server.set("view engine", "html");
nunjucks.configure("views", {
    //aqui digo que vou usar o express e a variavel server.
    express:server
});




//Rotas
server.get("/", function(req, res){
    //aqui vou renderizar minha view
    return res.render("index")
});

server.get("/portfolio", function(req, res){
    //aqui vou renderizar minha view
    return res.render("portfolio")
});

//server porta
server.listen(5000, function(){
    console.log("Server is running");
});
