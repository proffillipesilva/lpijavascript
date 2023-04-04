import { Request, Response, Router } from "express";
import alunoController from "../controllers/aluno.controller";

const alunoRouter = Router();
// GET, POST, PUT, DELETE
alunoRouter.get('/:rm', alunoController.pegaPorRm);

export default alunoRouter;