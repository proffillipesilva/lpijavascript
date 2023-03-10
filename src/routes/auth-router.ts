import { Router, Request, Response } from "express";
import { loginUser } from "../controllers/auth-controller";
const authRouter: Router = Router();

authRouter.post("/login",  loginUser);

export default authRouter;