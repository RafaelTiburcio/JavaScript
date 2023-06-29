const hora = 23;
let saudacao;

if (hora < 12) {
    saudacao = 'Bom dia!';
}
else if (hora < 18) {
    saudacao = 'Boa Tarde!';
}
else if (hora < 22) {
    saudacao = 'Boa Noite!'
}
else {
    saudacao = 'Muito Tarde!'
}

console.log(saudacao);