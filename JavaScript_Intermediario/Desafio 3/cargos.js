/*
Empresa de desenvolvimento de software

Programador Junior -> 4 mil
Programador Pleno -> 5 mil
Programador Senior -> 6 mil
testador -> 5 mil
arquiteto -> 8 mil
analista -> 7 mil
gerente -> 10 mil
*/

let cargo = "Arquiteto";

switch(cargo) {
    case "Programador Junior":
        console.log("O programador Junior recebe 4 mil reais");
        break;
    case "Programador Pleno":
        console.log("O programador pleno recebe 5 mil reais");
        break;
    case "Programador Senior":
        console.log("O programador Senior recebe 6 mil reais");
        break;
    case "Testador":
        console.log("O testador recebe 4 mil reais");
        break;
    case "Arquiteto":
        console.log("O arquiteto recebe 8 mil reais");
        break;
    case "Analista":
        console.log("O analista recebe 6 mil reais");
        break;
    case "Gerente":
        console.log("O gerente recebe 10 mil reais");
        break;
    default:
        console.log("Cargo nao cadastrado");
}