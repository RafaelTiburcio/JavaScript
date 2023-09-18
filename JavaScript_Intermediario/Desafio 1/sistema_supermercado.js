const item = {
    nome : "Toddy",
    preco : 5.99,
    validade : true,
    precoCompra : 4.30,
    quantidadeComprada : 100,
    quantidadeVendida : 100,
    custoFornecedor : function() {
        return this.precoCompra * this.quantidadeComprada;
    },
    totalBruto : function() {
        return this.preco * this.quantidadeVendida;
    },
    lucroPorUnidade : function() {
        return this.preco - this.precoCompra;
    },
    lucroTotal : function() {
        return this.lucroPorUnidade() * this.quantidadeVendida;
    },

    exibir() {
        return `Nome do Produto: ${this.nome}
Preço: ${this.preco}
Custo: ${this.precoCompra}
Unidades Compradas: ${this.quantidadeComprada} 
Unidades vendidas: ${this.quantidadeVendida}
Lucro por unidade: ${this.lucroPorUnidade()}
Gasto Fornecedor: ${this.custoFornecedor()}
Tootal Bruto: ${this.totalBruto()}
Lucro total: ${this.lucroTotal()}
`
    }


}

console.log(item);
console.log(item.exibir());
