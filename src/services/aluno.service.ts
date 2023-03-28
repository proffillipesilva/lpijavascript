import Aluno from "../models/Aluno";
import DBMock from "../models/DBMock";

function registraAluno(aluno: Aluno){ // CRIA
    DBMock.tb_alunos.push(aluno);
}

function editaInfoAluno(alunoEditado: Aluno, index: number){
    DBMock.tb_alunos.splice(index, 1, alunoEditado); // UPDATE
}

function consultaAlunos() : Aluno[] { // READ
    return DBMock.tb_alunos;
}

function consultaAlunoEspecifico(idx: number) : Aluno | null { // READ
    if(idx >= 0 && idx < DBMock.tb_alunos.length)
        return DBMock.tb_alunos[idx];
    return null;
}

function deletaAluno(idx: number) : void {  // DELETE
    DBMock.tb_alunos.splice(idx, 1);
}

export default { registraAluno, 
    editaInfoAluno, 
    consultaAlunos, 
    deletaAluno,
    consultaAlunoEspecifico
};