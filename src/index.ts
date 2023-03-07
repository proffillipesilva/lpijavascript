import express, {Express, Request, Response} from 'express';
import { validateEmail, validatePassword } from './validations';

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    const test = validateEmail("aloha@gmail.com");
    const pass = validatePassword("aloha!@#")
    if(test) {
        console.log("TRUE")
    } else {
        console.log("FALSE")
    }
    res.json("ok");

})

app.listen(38000, () => console.log("iniciando"))

// callback
// funcao que é chamada quando um evento acontece

// git reset --hard
// git checkout main
// git pull origin main

