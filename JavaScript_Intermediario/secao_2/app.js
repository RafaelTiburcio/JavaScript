/*
Sistema de cadastro de clientes
*/

const usuario = {
    email : "manuelSilva@gmail.com",
    nome : "Manuel Silva",
    idade : 24,
    codigoCliente : 90908080,

    exibir() {
        return `O Cliente ${this.nome}, ID: ${this.codigoCliente}, está com os dados atualizados.`
    }
}

console.log(usuario);
console.log(usuario.exibir());

