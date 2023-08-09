function executar(funcao, n1 = 0, n2 = 0) {
    if(typeof funcao === "function") {
        console.log(funcao(n1, n2));
    }
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}


executar(somar, 100, 90);
executar(subtrair, 100, 90);
executar(multiplicar, 100, 90);