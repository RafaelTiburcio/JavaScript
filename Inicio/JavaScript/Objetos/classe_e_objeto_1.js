class Data {
    dia = 1;
    mes = 1;
    ano = 2000;

    constructor(dia = 1, mes =1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    exibir() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const d1 = new Data();
d1.dia = 18;
d1.mes = 8;
d1.ano = 1993;
console.log(d1);
console.log(d1.exibir());

const d2 = new Data(8, 3, 1996);
console.log(d2);
console.log(d2.exibir());