// Sistema de aprovação e calculo da media dos alunos. Elimina-se a menor nota.
// >= 4 recuperação , < 4 reprovado, >= 7 aprovado

const nota1 = 5.8;
const nota2 = 4.1;
const nota3 = 0.1;

function menorNotaCalculoMedia(n1, n2, n3) {
    notaCorte = 0;
    if (n1 < n2 && n1 < n3) {
        notaCorte = n1;
    } else if (n2 < n1 && n2 < n3) {
        notaCorte = n2;
    } else {
        notaCorte = n3;
    }
    media = (n1 + n2 + n3 - notaCorte) /2;
    return media; 
}

function situacaoAluno(media) {
    if (media >= 7 && media <= 10) {
        return 'APROVADO!';
    } else if (media < 7 && media >=4) {
        return 'RECUPERACAO!';
    } else if (media < 4 && media >= 0) {
        return 'REPROVADO!';
    } else {
        return null;
    }
}

menorNotaCalculoMedia(nota1, nota2, nota3);
console.log(`Sua menor nota foi: ${notaCorte}`);
console.log(`Sua media final foi: ${media}`);
console.log(situacaoAluno(media));

