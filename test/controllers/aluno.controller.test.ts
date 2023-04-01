import { Response, Request,  request, response } from "express";
import alunoController from "../../src/controllers/aluno.controller";
import DBMock from "../../src/models/DBMock";

test("controller", () => {
    const res: Response = response
    res['json'] = jest.fn();
  
    const req: Request = request;
    req.params = {rm : 'abdc'};
    alunoController.pegaPorRm(req, res);
    expect(res.statusCode).toBe(400);

    req.params = {rm : '-1'};
    alunoController.pegaPorRm(req, res);
    expect(res.statusCode).toBe(400);

    req.params = {rm : '545521'};
    alunoController.pegaPorRm(req, res);
    expect(res.statusCode).toBe(404);

    const aluno = {rm: 545521, nome: 'Erick', curso: 'Logistica'};

    DBMock.tb_alunos.push(aluno);
    req.params = {rm : '545521'};
    alunoController.pegaPorRm(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.json).toHaveBeenCalledWith(aluno);

})

