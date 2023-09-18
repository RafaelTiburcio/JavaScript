/*
Sistema de cadastro de clientes
*/

/* Taxa de juros de acordo com a idade:
18 ~ 25 anos = 9%
26 ~ 35 anos = 8%
36 ~ 45 anos = 7%
51 ou mais = 6%
*/

const usuario = {
    email : "manuelSilva@gmail.com",
    nome : "Manuel Silva",
    idade : 24,
    codigoCliente : 90908080,
    valorEmprestimo : 150000,
    duracaoEmprestimo : 2,
    bomPagador : false,
    taxaJuros : function() {
        if(this.idade >= 18 && this.idade <= 25) {
            return 9;
        }else if(this.idade > 25 && this.idade <= 36) {
            return 8;
        }else if(this.idade > 36 && this.idade <= 45) {
            return 7;
        }else if(this.idade > 45) {
            return 6;
        }else {
            return null;
        }
    },
    valorComJuros : function() {
         return this.valorEmprestimo + ((this.valorEmprestimo * (this.taxaJuros() /100)) * this.duracaoEmprestimo);
        },
    inadimplencia : function() {
        if(this.bomPagador) {
            return "Sim";
        }else {
            return "Não";
        }
    },

    exibir() {
        return `O Cliente ${this.nome}, ID: ${this.codigoCliente}, Solicitou um esmprestimo no valor de R$ ${this.valorEmprestimo},00 com taxa de juros ${this.taxaJuros()}% ao ano.\n
        Valor a ser pago ao final do emprestimo : R$ ${this.valorComJuros()},00
        Pagamento em dia: ${this.inadimplencia()}`
                
    }
}

usuario.nome = "Rafael Tiburcio";
usuario.valorEmprestimo = 1500;
usuario.idade = 35;
;console.log(usuario);
console.log(usuario.exibir());

