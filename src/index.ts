
import express, { Express, Request, Response } from "express";
import alunoRouter from "./routes/aluno.router";

const app: Express = express(); // instancio o server

app.use(express.json()); // add parse json

app.get('/test', (req: Request, res: Response) => { // rota de teste
    res.send("Test Ok")
});

// alunos --> /alunos

app.use('/alunos', alunoRouter);

app.listen(38000, () => console.log("Inicializou servidor")); // escuto na porta 38000


// npm run tsc
// npm run start