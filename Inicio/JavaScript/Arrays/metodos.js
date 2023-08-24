const numeros = [1, 2, 3, 4, 5];

numeros.push(6);
numeros[0] = 100;
numeros.join(',');
numeros.concat(7, 8, 9);
const numeros2 = numeros.concat(7, 8, 9);

console.log(numeros.indexOf(4));
console.log(numeros.includes(10));
console.log(numeros.includes(6));
console.log(numeros.join(', '));
console.log(numeros);
console.log(numeros2);