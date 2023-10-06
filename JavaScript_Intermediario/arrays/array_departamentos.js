const quadroDeFuncionarios = [["Marketing", "Kilma", "Leticia"], ["RH", "Daniel", "Patricia"], ["Gerentes", "Karina", "Rafael"]];

quadroDeFuncionarios.forEach((departamento, indiceDep) => {
    departamento.forEach((funcionario, indiceFunc) => {
        console.log(funcionario);
    });
});