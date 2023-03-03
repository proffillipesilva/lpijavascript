import express, {Express, Request, Response} from 'express';

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    console.log(req.body);
    res.json("ok");
})

app.listen(38000, () => console.log("iniciando"))