function executar(funcao, n1 = 0, n2 = 0) {
    if(typeof funcao === "function") {
        console.log(funcao(n1, n2));
    }
}

function maiorNumero(n1, n2) {
    if(n1 > n2) {
        return n1;
    } else if (n1 < n2) {
        return n2;
    } else if ( n1 === n2) {
        return 'Valores iguais';
    }
}

executar(maiorNumero, 1, 2);
executar(maiorNumero, 2, 5);
executar(maiorNumero, 3, 4);
executar(maiorNumero, 4, 3);
executar(maiorNumero, 2, 2);