const cliente = {
    codigo : 16532,
    nome : 'Ana',
    vip : true,
    endereco : {
        logradouro : 'Rua Hanibal Porto',
        numero : 501,
        complemento : 'Bloco 45, ap 203',
        pontosRef : [
            'Hospital x',
            'Shopping y',
        ]
    }
};

console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[1]);