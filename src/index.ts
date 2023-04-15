
import express, { Express, Request, Response } from "express";
import alunoRouter from "./routes/aluno.router";
import path from "path";

const app: Express = express(); // instancio o server

app.use(express.json()); // add parse json

app.get('/test', (req: Request, res: Response) => { // rota de teste
    res.send("Test Ok")
});

// alunos --> /alunos

app.use('/app/v1/alunos', alunoRouter);

app.use(express.static('public'));

app.listen(38000, () => console.log("Inicializou servidor")); // escuto na porta 38000


// npm run tsc
// npm run start