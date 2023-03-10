import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import userRouter from './routes/user-router';
import produtoRouter from './routes/product-router';
import authRouter from './routes/auth-router';

const app: Express = express();
app.use(bodyParser.json()); // processa os parametros no corpo da msg

app.use(morgan("combined")); // para logar quem está acessando e onde

app.get("/", (req: Request, res: Response) => {
    res.json("ok");
})



app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/products', produtoRouter);

app.listen(38000, () => console.log("iniciando"))

