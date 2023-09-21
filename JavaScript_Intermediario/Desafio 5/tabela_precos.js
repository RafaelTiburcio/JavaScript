const preco = 1.99;
let unidadesCompradas = parseInt(prompt("Quantos produtos o cliente comprou?"));

while(unidadesCompradas != 0) {
     valorFinal = unidadesCompradas * preco;
     console.log(`O total da compra foi de: R$ ${valorFinal}`);
     break;
}

let valorRecebido = parseInt(prompt(`O total de sua compra foi de: R$ ${valorFinal}\n
Qual o valor em dinheiro que sera recebido:`));

while(true) {
    if(valorRecebido < valorFinal) {
        console.log("O valor recebido é menor que o valor da compra");
        break;
    }
    troco = valorRecebido - valorFinal;
    console.log(`O valor do troco sera de R$ ${troco.toFixed(2)}`);
    break;
}



