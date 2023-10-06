const array = ["Elemento0", "Elemento1", "Elemento2"];

const array2 = Array("Elemento0", "Elemento1", "Elemento2");

const array3 = new Array("Elemento0", "Elemento1", "Elemento2");

const frutas = ["Melancia", "Morango", "Laranja", "Abacaxi"];
frutas.push("Abacate");
//frutas.sort(); // coloca em ordem crescente
//frutas.pop(); // remove ultimo elemento
//frutas.shift(); // remove primeiro elemento

function adicionaFrutas(fruta) {
    frutas.push(fruta);
}

function removeFrutas() {
    frutas.pop();
}

function editaFrutas(fruta, indice) {
    frutas[indice] = fruta;
}

function ordenaFrutas() {
    return frutas.sort();
}

adicionaFrutas("Pera");
adicionaFrutas("Kiwi");
console.log(frutas);
removeFrutas();
console.log(frutas);
ordenaFrutas();
console.log(frutas);
editaFrutas("Pessego", 0);
console.log(frutas);

const numeros = [10, 20, 30, 40, 50, 60];

const novosNumeros = numeros.map((numero) => numero + 10);

console.log(numeros);
console.log(novosNumeros);

const numbers = [1, 4, 5, 6, 7, 8, 11, 33, 45, 67, 90];

const numerosImpares = numbers.filter((numero) => numero % 2 === 1);

const maiores = numbers.filter((numero) => numero > 25);

const menores = numbers.filter((numero) => numero < 25);

const numeroRetornado = numbers.find((numero) => numero > 25);
const numeroRetornado2 = numeros.find((numero) => numero > 20);

console.log(numbers);
console.log(numerosImpares);
console.log(maiores);
console.log(menores);
console.log(numeroRetornado);
console.log(numeroRetornado2);