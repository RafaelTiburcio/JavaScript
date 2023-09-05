const dataNascimento = {
    dia : 18,
    mes : 8,
    ano : 1993,
    exibir : function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(dataNascimento.exibir());

