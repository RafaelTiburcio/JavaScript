function criarData(dia, mes, ano) {
    return {
        dia : dia,
        mes : mes,
        ano : ano,
        exibir : function() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    }
};

const d1 = criarData(18, 8, 1993);
const d2 = criarData(27, 4, 1970);
const d3 = criarData(20, 5, 2000);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());