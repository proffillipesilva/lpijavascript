import DBMock from "./DBMock";
import Professor from "./Professor";

class ProfessorRepositorio {
    registraProfessor(Professor: Professor){ // CRIA
        DBMock.tb_professores.push(Professor);
    }
    
    editaInfoProfessor(ProfessorEditado: Professor, index: number){
        DBMock.tb_professores.splice(index, 1, ProfessorEditado); // UPDATE
    }
    
    consultaProfessores() : Professor[] { // READ
        return DBMock.tb_professores;
    }
    
    consultaProfessorEspecifico(idx: number) : Professor | null { // READ
        if(idx >= 0 && idx < DBMock.tb_professores.length)
            return DBMock.tb_professores[idx];
        return null;
    }
    
    deletaProfessor(idx: number) : void {  // DELETE
        DBMock.tb_professores.splice(idx, 1);
    }
}

export default ProfessorRepositorio;

