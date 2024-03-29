import Aluno from "../../src/models/Aluno";
import DBMock from "../../src/models/DBMock";
import alunoService  from "../../src/services/aluno.service";

test('registra aluno',()=>{
    const aluno = {
        rm: 3, nome: "Joao", curso: "TI"
    } as Aluno;
    expect(DBMock.tb_alunos.length).toBe(0);
    alunoService.registraAluno(aluno);
    expect(DBMock.tb_alunos.length).toBe(1);
    expect(DBMock.tb_alunos[0]).toBe(aluno);
})


test('edita aluno', ()=>{
    const aluno = {
        rm: 3, nome: "Joao", curso: "TI"
    } as Aluno;
   
   
    DBMock.tb_alunos.splice(0,100);//zerar a tabela
    DBMock.tb_alunos.push(aluno, aluno, aluno);


    const alunoEditado = {
        rm: 12, nome: "Maria", curso: "Quimica"
    }as Aluno;
   
    alunoService.editaInfoAluno(alunoEditado,2);
    expect(DBMock.tb_alunos.length).toBe(3);
    expect(DBMock.tb_alunos[0]).toBe(aluno);
    expect(DBMock.tb_alunos[2]).toBe(alunoEditado);
})
test('consulta aluno', ()=>{
    const aluno = {
        rm: 3, nome: "Joao", curso: "TI"
    } as Aluno;

    DBMock.tb_alunos.splice(0,100);//zerar a tabela
    DBMock.tb_alunos.push(aluno, aluno, aluno);

    const alunos = alunoService.consultaAlunos();
    expect (alunos.length).toBe(3);
    expect(alunos[1]).toBe(aluno);
})

test("deletaAluno(idx) ", () => {
    const aluno = {
        rm: 3, nome: "Joao", curso: "TI"
    } as Aluno;

    DBMock.tb_alunos.splice(0,100);//zerar a tabela
    DBMock.tb_alunos.push(aluno, aluno, aluno);
    alunoService.deletaAluno(1);
    expect (DBMock.tb_alunos.length).toBe(2);

})

test("filtraAlunoPorRM(rm) ", () => {
    const aluno1 = { rm: 3, nome: "Joao", curso: "TI"} as Aluno;
    const aluno2 = { rm: 5, nome: "Maria", curso: "TI"} as Aluno;
    const aluno3 = { rm: 7, nome: "Rita", curso: "TI"} as Aluno;

    DBMock.tb_alunos.splice(0,100);//zerar a tabela
    DBMock.tb_alunos.push(aluno1, aluno2, aluno3);
    let alunoSelecionadoPorRM = alunoService.filtraPorRM(3);
    
    expect(alunoSelecionadoPorRM?.nome).toBe("Joao");
    alunoSelecionadoPorRM = alunoService.filtraPorRM(5);
    
    expect(alunoSelecionadoPorRM?.nome).toBe("Maria");
    alunoSelecionadoPorRM = alunoService.filtraPorRM(7);
    
    expect(alunoSelecionadoPorRM?.nome).toBe("Rita");
    
    

})