let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);

console.log(preco);
console.log(precoComDesconto);

let nome = "Caderno";
let categoria = "Papelaria";
console.log("Produto: " + nome + ", Categoria: " + categoria 
    + ", Preco: R$" + precoComDesconto);
