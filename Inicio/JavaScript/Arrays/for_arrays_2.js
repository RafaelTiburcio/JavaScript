const notas = [7, 8, 3, 5, 10, 8, 9, 8];

for (let nota of notas) {
    console.log(nota);
}

let valores = '';

for (let nota of notas) {
    valores += nota + ' ';
}

console.log(valores);


let indices = '';
for(let indice in notas) {
    indices += indice + ' ';
}

console.log(indices);