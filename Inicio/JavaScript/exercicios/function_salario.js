function executar(funcao, n1 = 0, n2 = 0) {
    if(typeof funcao === "function") {
        console.log(funcao(n1, n2));
    }
}

function calculoSalario(horas, diaria) {
    return `O salario a ser recebido é R$ ${horas * diaria},00`;

}

executar(calculoSalario, 150, 40.5);
executar(calculoSalario, 180, 60);