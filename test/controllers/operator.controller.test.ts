import { Request, Response, request, response } from "express";
import operatorController from "../../src/controllers/operator.controller";

test("testando o controlador", () => {
    let req: Request = request;
    req.body = {
        op1: 3,
        operator: "+",
        op2: 2
    }
    let res: Response = response;
    expect(operatorController.operator(req, res)).toBe(5);
})