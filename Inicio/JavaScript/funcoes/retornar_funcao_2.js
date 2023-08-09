function retornar() {
    return function() {
        return 'Boa Tarde!';
    }
}

console.log(retornar);
console.log(retornar());
console.log(retornar()());