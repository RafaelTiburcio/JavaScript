const urna = ["Manuel", "Edval", "Sarah", "Kilma", "Matheus", "Rafael", "Keila", "Lucas", "Leticia", "Jose"];

urna.sort();
console.log(urna);

let indiceAleatorio = Math.floor(Math.random() * urna.length);

console.log("O Nome sorteado foi: " + urna[indiceAleatorio]);

/*
for(let i = 0; i < urna.length; i++) {
    console.log(urna[i]);
}
*/

/*
for(let indice in urna) {
    console.log(urna[indice]);
}
*/

/*
for(nome of urna) {
    console.log(nome);
}
*/

urna.forEach((nome, indice) => {
    console.log(`Nome ${indice+1}: ${nome}`);
});