// Importo a lib de servidores
const express = require('express');
const bodyParser = require('body-parser');
const userService = require('./src/usuario');
// Inicializo a lib na variavel app
const app = express();

// inicializar o middleware para processar o json
app.use(bodyParser.json());

const loggedUsers = [];

// crio uma rota do tipo get com caminho /hello e determino
// sua resposta
app.get('/hello', (_,res) => {
    res.json("Hello World - By FIEC")
})

app.post('/login', (req,res) => {
    const loginData = req.body;
    console.log(loginData);
    const codigo = userService.login(loginData.email, loginData.password);
    if(codigo == 200){
        loggedUsers.push(loginData.email);
        res.json('ok');
    } else {
        res.status(codigo).end();
    }
    
})
// Quando nao usamos um parametro, colocamos underline nele
app.get('/loggedUsers',(_,res) => {
    res.json(loggedUsers);
})

// Lanço o servidor na porta 38000. Quando iniciar,
// imprime Iniciando...
app.listen(38000, () => console.log("Iniciando..."));

// npm i body-parser 