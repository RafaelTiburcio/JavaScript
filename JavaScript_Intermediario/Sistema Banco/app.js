/*
Sistema de cadastro de clientes
*/

/* Taxa de juros de acordo com a idade:
18 ~ 25 anos = 9%
26 ~ 35 anos = 8%
36 ~ 45 anos = 7%
51 ou mais = 6%
*/
  
    function cadastroCliente(nome, email, idade) {
        nome = prompt("Digite o seu nome:");
        email = prompt("Digite o seu email:");
        idade = parseInt(prompt("Informe sua idade:"));
        taxa = taxaJuros(idade);
        return console.log(`CLiente: ${nome}
        Email: ${email}
        Idade: ${idade}
        Taxa de Juros: ${taxa}`)

    }

    function taxaJuros(idade){
        if(idade >= 18 && idade <= 25) {
            return 9;
        }else if(idade > 25 && idade <= 36) {
            return 8;
        }else if(idade > 36 && idade <= 45) {
            return 7;
        }else if(idade > 45) {
            return 6;
        }else {
            return null;
        }
    };

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
    while(true){
        valorEmprestimo = parseInt(prompt("Informe o valor solicitado;"));
        if(valorEmprestimo === 0) {
            break;
        }
        duracaoEmprestimo = parseInt(prompt("Em quantos anos deseja pagar:"));
        function valorComJuros(valorEmprestimo) {
            let valorTaxa = valorEmprestimo + (valorEmprestimo * ((taxa /100) * duracaoEmprestimo));
            return valorTaxa;
   };
        console.log(`Valor solicitado: R$ ${valorEmprestimo} | Duracao do emprestimo em anos: ${duracaoEmprestimo} | Valor total do emprestimo: R$ ${valorComJuros(valorEmprestimo)},00 com taxa de ${taxa}% ao ano.`);
}




