const d1 = {
    dia : 18,
    mes : 8,
    ano : 1993,
    exibir : function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

const d2 = {
    dia : 22,
    mes : 2,
    ano : 1994,
    exibir : function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

const d3 = {
    dia : 18,
    mes : 10,
    ano : 1983,
    exibir : function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());