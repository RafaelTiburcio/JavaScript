function geraRelatorio(array) {
    let contAprovados = 0;
    let contReprovados= 0;
    for (const nota of array) {
        if(nota >= 7) {
            contAprovados = contAprovados + 1;
        } else {
            contReprovados = contReprovados + 1;
        }
    }
    return `Aprovados: ${contAprovados} | Reprovados: ${contReprovados}`
}

console.log(geraRelatorio([8, 5, 4, 7, 9, 10]));