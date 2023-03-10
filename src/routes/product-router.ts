import { Router, Request, Response } from "express";
import DB from "../db";
const produtoRouter: Router = Router();

produtoRouter.get('/',  (req: Request, res: Response) => {
    res.json(DB.produtos);
})

export default produtoRouter;