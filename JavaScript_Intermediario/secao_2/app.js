/*
Sistema de cadastro de clientes
*/

const usuario = {
    email : "manuelSilva@gmail.com",
    nome : "Manuel Silva",
    idade : 24,
    codigoCliente : 90908080,
    valorEmprestimo : 1500,
    taxaJuros : 7.5,
    valorComJuros : function() {
         return this.valorEmprestimo + (this.valorEmprestimo * (this.taxaJuros /100));
        },
    bomPagador : "SIM",

    exibir() {
        return `O Cliente ${this.nome}, ID: ${this.codigoCliente}, Solicitou um esmprestimo no valor de R$ ${this.valorEmprestimo},00 com taxa de juros ${this.taxaJuros}% ao ano.\n
        Valor a ser pago ao final do emprestimo : R$ ${this.valorComJuros()},00
        Pagamento em dia: ${this.bomPagador}`
                
    }
}

usuario.nome = "Rafael Tiburcio";
usuario.valorEmprestimo = 2340;
usuario.taxaJuros = 50;
;console.log(usuario);
console.log(usuario.exibir());

