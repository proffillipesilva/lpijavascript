import { Request, Response } from "express";
import { login } from "../services/auth-service";


function loginUser(req: Request, res: Response): void  {
    const usuario = req.body;
    const status  = login(usuario.email, usuario.password);
    res.status(status).end();
}


export { loginUser }