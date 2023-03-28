import Aluno from "../models/Aluno";
import DBMock from "../models/DBMock";

function registraAluno(aluno: Aluno){
    DBMock.tb_alunos.push(aluno);
}

function editaInfoAluno(alunoEditado: Aluno, index: number){
    DBMock.tb_alunos.splice(index, 1, alunoEditado);
}

function consultaAlunos() : Aluno[] {
    return DBMock.tb_alunos;
}

export default { registraAluno, editaInfoAluno, consultaAlunos};