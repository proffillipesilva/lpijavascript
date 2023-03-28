import Aluno from "../models/Aluno";
import AlunoDAO from "../models/AlunoDAO";

function registraAluno(aluno: Aluno){ // CRIA
    new AlunoDAO().registraAluno(aluno);
}

function editaInfoAluno(alunoEditado: Aluno, index: number){
    new AlunoDAO().editaInfoAluno(alunoEditado,index);// UPDATE
}

function consultaAlunos() : Aluno[] { // READ
    return new AlunoDAO().consultaAlunos();
}

function consultaAlunoEspecifico(idx: number) : Aluno | null { // READ
    return new AlunoDAO().consultaAlunoEspecifico(idx);
}

function deletaAluno(idx: number) : void {  // DELETE
    new AlunoDAO().deletaAluno(idx);
}

export default { registraAluno, 
    editaInfoAluno, 
    consultaAlunos, 
    deletaAluno,
    consultaAlunoEspecifico
};