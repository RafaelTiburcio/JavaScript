let temperatura;
let quantidade = 0;
let soma = 0;
let media = 0;

while(true) {
    temperatura = parseInt(prompt("Insira as temperaturas para o calculo da media: "));
    if(temperatura === 0) {
        console.log("Voce digitou o valor 0. O programa sera encerrado.");
        break;
    }
    quantidade = quantidade + 1;
    soma = temperatura + soma;
    media = soma / quantidade;
}

console.log(`A media de temperatura calculada da regiao foi de: ${media.toFixed(2)} graus`);