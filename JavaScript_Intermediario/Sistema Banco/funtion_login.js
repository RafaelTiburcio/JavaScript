const cliente = {
     nome: "nomeCliente",
     idade: "idadeCliente",
}

function adicionaInfLogin(cliente, email, senha) {
    if (email.indexOf("@") !== -1 && senha.length > 5) {
        cliente.login = {
            email: email,
            senha: senha,
        } 
        return cliente;
    }else {
        return "Credenciais invalidas";
    }
}

console.log(adicionaInfLogin(cliente, "rafaeltds93@gmail.com", "32333423"));
console.log(adicionaInfLogin(cliente, "sdasdasdassad", "sds" ));
