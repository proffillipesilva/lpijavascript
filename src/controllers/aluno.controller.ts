/* Tratamento da requisição e resposta */

import { Request, Response } from "express";
import alunoService from "../services/aluno.service";
import Aluno from "../models/Aluno";

// pegue um aluno via RM
function pegaPorRm(req: Request, res: Response){

    // 2 formas de passar parametros para a req
    // params
    // body
    // query -- bem mais para frente
    const { rm } = req.params;
    console.log(rm);
    if(!rm.match(/\d/)){
        res.status(400).end(); // BAD REQUEST
        return;
    }
    const rmInt = parseInt(rm);
    if(rmInt <= 0){
        res.status(400).end();  // BAD REQUEST
        return;
    }
    const aluno = alunoService.filtraPorRM(rmInt);
    
    if(aluno){
        res.status(200).json(aluno);
    }
    else res.status(404).end();   // NOT FOUND
}

function pegaAlunos(req: Request, res: Response){
    const alunos = alunoService.consultaAlunos();
    res.json(alunos);
}

function insereAluno(req: Request, res: Response){
    let aluno;
    try{
        aluno = req.body as Aluno;
    } catch(err){
        res.status(400).end();
        return;
    }
    alunoService.registraAluno(aluno);
    res.json("OK");
    
}

export default {pegaPorRm, pegaAlunos, insereAluno}