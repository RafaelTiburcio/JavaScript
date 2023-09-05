function executar(funcao, n1 = 0) {
    if(typeof funcao === "function") {
        console.log(funcao(n1));
    }
}


function conversorIdade(idade) {
    return idade * 365;
}

executar(conversorIdade, 25);
