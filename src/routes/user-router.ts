import { Router, Request, Response } from "express";
import DB from "../db";
const userRouter: Router = Router();

userRouter.get('/',  (req: Request, res: Response) => {
    res.json(DB.usuarios);
})

export default userRouter;