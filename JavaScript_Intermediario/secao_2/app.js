/*
Sistema de cadastro de clientes
*/

const usuario = {
    email : "manuelSilva@gmail.com",
    nome : "Manuel Silva",
    idade : 24,
    codigoCliente : 90908080,
    valorEmprestimo : 1500,
    taxaJuros : 0.75,
    valorComJuros : function() {
         return this.valorEmprestimo + (this.valorEmprestimo * this.taxaJuros);
        },
    bomPagador : "SIM",

    exibir() {
        return `O Cliente ${this.nome}, ID: ${this.codigoCliente}, Solicitou um esmprestimo no valor de R$ ${this.valorEmprestimo},00 com taxa de juros ${this.taxaJuros}% ao ano.
    Valor a ser pago ao final do emprestimo : R$ ${this.valorComJuros()},00
    Pagamento em dia: ${this.bomPagador}`
                
    }
}

console.log(usuario);
console.log(usuario.exibir());

