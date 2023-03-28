function operator(op1: number, operator: string, op2: number){
    let resposta : number = 0; // inicial

    // 2 '2'
    if(operator === "+"){
        resposta = op1 + op2;
    } else if(operator === "-"){
        resposta = op1 - op2;
    } else if(operator === "*"){
        resposta = op1 * op2;
    } else {
        resposta = op1 / op2;
    }

    return resposta;
}

export default { operator };