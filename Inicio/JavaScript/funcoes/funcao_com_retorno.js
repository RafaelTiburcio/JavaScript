function sempreRetornaUm() {
    return 1;
}

function textoOuNumero(retornaTexto) {
    if(retornaTexto) {
        return 'Sou um texto!';
    } else {
        return 123;
    }
}

let resultado = textoOuNumero(false);
let valor = 1000 * sempreRetornaUm();
console.log(valor);
console.log(resultado);