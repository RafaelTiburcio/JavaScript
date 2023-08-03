// #1 Função com parametros e com retorno
function somar(a,b) {
    return a + b;
}

let resultado = somar(10, 15);

console.log(resultado);


// #2 função com parametros e sem retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

// #3 Função sem parametro e com retorno
function retornarDataAtual() {
    return new Date();
}

console.log(retornarDataAtual());

// #4 Função sem parametro e sem retorno
function exibirHoraAtual() {
    console.log(new Date().getHours());
}

exibirHoraAtual();