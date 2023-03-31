import Aluno from "./Aluno";
import DBMock from "./DBMock";

class AlunoRepositorio {
    registraAluno(aluno: Aluno){ // CRIA
        DBMock.tb_alunos.push(aluno);
    }
    
    editaInfoAluno(alunoEditado: Aluno, index: number){
        DBMock.tb_alunos.splice(index, 1, alunoEditado); // UPDATE
    }
    
    consultaAlunos() : Aluno[] { // READ
        return DBMock.tb_alunos;
    }
    
    consultaAlunoEspecifico(idx: number) : Aluno | null { // READ
        if(idx >= 0 && idx < DBMock.tb_alunos.length)
            return DBMock.tb_alunos[idx];
        return null;
    }
    
    deletaAluno(idx: number) : void {  // DELETE
        DBMock.tb_alunos.splice(idx, 1);
    }
}

export default AlunoRepositorio;