import Aluno from "../models/Aluno";
import AlunoRepositorio from "../models/AlunoRepositorio";

function registraAluno(aluno: Aluno){ // CRIA
    new AlunoRepositorio().registraAluno(aluno);
}

function editaInfoAluno(alunoEditado: Aluno, index: number){
    new AlunoRepositorio().editaInfoAluno(alunoEditado,index);// UPDATE
}

function consultaAlunos() : Aluno[] { // READ
    return new AlunoRepositorio().consultaAlunos();
}

function consultaAlunoEspecifico(idx: number) : Aluno | null { // READ
    return new AlunoRepositorio().consultaAlunoEspecifico(idx);
}

function deletaAluno(idx: number) : void {  // DELETE
    new AlunoRepositorio().deletaAluno(idx);
}

function filtraPorRM(rm: number) : Aluno | null {
    const alunos = new AlunoRepositorio().consultaAlunos();
    for (let index = 0; index < alunos.length; index++) {
        const aluno = alunos[index];
        if(aluno.rm == rm){
            return aluno
        }
    }
    
    return null;
}

export default { registraAluno, 
    editaInfoAluno, 
    consultaAlunos, 
    deletaAluno,
    consultaAlunoEspecifico,
    filtraPorRM
};