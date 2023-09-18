const corredor1 = {
    nome : "Michael Scott",
    idade : 27,
    tempo: 104,
}

const corredor2 = {
    nome : "Gabriel Pec",
    idade : 23,
    tempo : 102,
}

const corredor3 = {
    nome : "Paulinho Paula",
    idade : 25,
    tempo : 101,
}

function menorTempo(tempo1, tempo2, tempo3) {
    if(corredor1.tempo < corredor2.tempo && corredor1.tempo < corredor3.tempo) {
        return `O atleta ${corredor1.nome} atingiu o tempo de ${corredor1.tempo}s e conseguiu o menor tempo da prova`;
    }else if(corredor2.tempo < corredor3.tempo) {
        return `O atleta ${corredor2.nome} atingiu o tempo de ${corredor2.tempo}s e conseguiu o menor tempo da prova`;
    }else {
        return `O atleta ${corredor3.nome} atingiu o tempo de ${corredor3.tempo}s e conseguiu o menor tempo da prova`;
    }
}


console.log(menorTempo());