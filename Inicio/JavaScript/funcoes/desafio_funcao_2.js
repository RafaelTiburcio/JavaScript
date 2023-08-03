// Parametro (Nota) -> conceito


function notaParaConceito(nota) {

    if (nota === 10) {
        return 'A+';
    } else if (nota < 10 && nota >= 9) {
        return 'A';
    } else if (nota < 9 && nota >= 8) {
        return 'B+';
    } else if (nota < 8 && nota >= 7) {
        return 'B';
    } else if (nota < 7 && nota >= 6) {
        return 'C+';
    } else if (nota < 6 && nota >= 5) {
        return 'C';
    } else if (nota < 5 && nota >= 4) {
        return 'D+';
    } else if (nota < 4 && nota >= 3) {
        return 'D';
    } else if (nota < 3 && nota >= 2) {
        return 'E+';
    } else if (nota < 2 && nota >= 1) {
        return 'E';
    } else if (nota < 1 && nota >= 0 ) {
        return 'F';
    } else {
        return null;
    }

}

console.log(notaParaConceito(1.2));



