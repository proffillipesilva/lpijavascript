import express, {Express, Request, Response} from 'express';
import { login } from './user';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import DB from './db';

const app: Express = express();
app.use(bodyParser.json()); // processa os parametros no corpo da msg

app.use(morgan("combined")); // para logar quem está acessando e onde

app.get("/", (req: Request, res: Response) => {

    res.json("ok");

})

app.get("/listaDeUsuarios", (req: Request, res: Response) => {
    res.json(DB.usuarios);
})

app.get("/listaDeProdutos", (req: Request, res: Response) => {
    res.json(DB.produtos);
})

app.post("/login", (req: Request, res: Response) => {
    const usuario = req.body;
    const status = login(usuario.email, usuario.password);
    res.status(status).end();
})

app.listen(38000, () => console.log("iniciando"))

