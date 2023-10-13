const celular = {
    nome: "Iphone 14",
    marca: "Apple",
    camera: 12,
    sistemaOperacional: "IOS 14",
    atendeLigacao: function() {
        return "Ligacao atendida";
    },
    acessaInternet: function() {
        return "Acessou a internet";
    },
    reproduzMusica: function() {
        return "Reproduz Musica";
    }
};

console.log(celular);

const carro = {
    nome: "Astra",
    marca: "Chevrolet",
    ano: 2000,
    cor: "Verde",
    emplacado: true,
    consumo: 11,
    reservatorioTanque: 45,
    motor: {
        cavalos: 126,
        cilindradas: 1.8,
    },
    kmPercorrido: function() {
        return `O ${this.nome} percorre um total de ${this.consumo * this.reservatorioTanque} km com o tanque cheio. `;
    }
};

carro.cor = "azul";

const chaves = Object.keys(carro);
console.log(chaves);

const valores = Object.values(carro);
console.log(carro);

const entradas = Object.entries(carro);
console.log(entradas);

const carro2 = Object.assign(carro);
console.log(carro2);


const carro1 = {
    nome: "Fiesta",
    ano: 2003,
    cor: "Prateado",
    marca: "Ford",
}

for(const [chave, valor] of Object.entries(carro1)) {
    console.log(`${chave} : ${valor}`);
}