import { Request, Response } from "express";
import operatorService from "../services/operator.service";

function operator(req: Request, res: Response){
    // Pega os parametros do corpo (body) da requisicao
    
    const {op1, op2, operator} = req.body;
    // chama o servico (operatorService.operator)
    const resposta = operatorService.operator(op1, operator, op2);
    // guarda a resposta numa variavel
    // retorna a resposta
    return resposta;
    
}

export default { operator }