/*
Sistema de cadastro de clientes
*/

/* Taxa de juros de acordo com a idade:
18 ~ 25 anos = 9%
26 ~ 35 anos = 8%
36 ~ 45 anos = 7%
51 ou mais = 6%
*/
  
    function cadastroCliente(nome, idade, email, senha) {
        cliente = {
            nome : prompt("Digite o seu nome:"),
            idade : parseInt(prompt("Informe sua idade:")),
            taxa : function() {
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
            }
        }
            return cliente;
    };      
  

    function adicionaInfLogin(cliente, email, senha) {
        let emailCliente = prompt("Digite seu email:");
        let senhaCliente = prompt("Digite sua senha:");
        if (emailCliente.indexOf("@") !== -1 && senhaCliente.length > 5) {
            login = {
                email: emailCliente,
                senha: senhaCliente,
            } 
            return login;
        }else {
            return "Credenciais invalidas";
        }
    }
/*
    for(let cont = 0; cont < 3; cont++){
        valorEmprestimo = parseInt(prompt("Informe o valor solicitado;"));
        duracaoEmprestimo = parseInt(prompt("Em quantos anos deseja pagar:"));
        function valorComJuros() {
            return valorEmprestimo + ((valorEmprestimo * (taxaJuros() /100)) * duracaoEmprestimo);
           };
        console.log(`Cliente: ${nomeUsuario} | Valor solicitado: R$ ${valorEmprestimo} | Duração do emprestimo em anos: ${duracaoEmprestimo} | Valor total do emprestimo: R$ ${valorComJuros()},00 com taxa de ${taxaJuros()}% ao ano.`);
    }
*/
   
/*valorEmprestimo = 1;
    while(valorEmprestimo != 0){
        valorEmprestimo = parseInt(prompt("Informe o valor solicitado;"));
        duracaoEmprestimo = parseInt(prompt("Em quantos anos deseja pagar:"));
        function valorComJuros() {
            return valorEmprestimo + ((valorEmprestimo * (taxaJuros() /100)) * duracaoEmprestimo);
       };
    console.log(`Cliente: ${nomeUsuario} | Valor solicitado: R$ ${valorEmprestimo} | Duracao do emprestimo em anos: ${duracaoEmprestimo} | Valor total do emprestimo: R$ ${valorComJuros()},00 com taxa de ${taxaJuros()}% ao ano.`);
    }
*/

cadastroCliente();
adicionaInfLogin();  
while(true){
        valorEmprestimo = parseInt(prompt("Informe o valor solicitado;"));
        if(valorEmprestimo === 0) {
            break;
        }
        duracaoEmprestimo = parseInt(prompt("Em quantos anos deseja pagar:"));
        function valorComJuros(valorEmprestimo) {
            let valorTaxa = valorEmprestimo + (valorEmprestimo * ((cliente.taxa() /100) * duracaoEmprestimo));
            return valorTaxa;
   };
        console.log(`Valor solicitado: R$ ${valorEmprestimo} | Duracao do emprestimo em anos: ${duracaoEmprestimo} | Valor total do emprestimo: R$ ${valorComJuros(valorEmprestimo)},00 com taxa de ${cliente.taxa()}% ao ano.`);
}






