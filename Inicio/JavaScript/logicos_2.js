const t1 = true;
const t2 = true;

console.log('Vamos comprar a TV de 50"?  ', (t1 && t2)); // AND
console.log('Vamos comprar a TV de 32"?  ', (t1 !== t2)); // XOR

let tomarSorvete = t1 || t2; // OR
console.log('Vamos comprar sorvete?  ', tomarSorvete); 

let ficarEmCasa = !tomarSorvete; // NOT
console.log('Vamos ficar em casa? ', ficarEmCasa); 