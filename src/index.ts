import express, {Express, Request, Response} from 'express';
import { login } from './user';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app: Express = express();
app.use(bodyParser.json()); // processa os parametros no corpo da msg

app.use(morgan("combined")); // para logar quem está acessando e onde

app.get("/", (req: Request, res: Response) => {

    res.json("ok");

})

app.post("/login", (req: Request, res: Response) => {
    const usuario = req.body;
    const status = login(usuario.email, usuario.password);
    res.status(status).end();
})

app.listen(38000, () => console.log("iniciando"))

// callback
// funcao que é chamada quando um evento acontece

// git reset --hard
// git checkout main
// git pull origin main

// http://10.5.9.21:38000