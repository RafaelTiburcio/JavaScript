
function questionario() {
     let contadorSim = 0;
     let pergunta1 = prompt("Telefonou para a vitima recentemente?");
     let pergunta2 = prompt("Esteve no local do crime?");
     let pergunta3 = prompt("Mora perto da vitima?");
     let pergunta4 = prompt("Devia para a vitima?");
     let pergunta5 = prompt("Ja trabalhou com a vitima?");
     if(pergunta1 === "sim") {
          contadorSim = contadorSim + 1;
     }
     if(pergunta2 === "sim") {
          contadorSim = contadorSim + 1;
     }
     if(pergunta3 === "sim") {
          contadorSim = contadorSim + 1;
     }
     if(pergunta4 === "sim") {
          contadorSim = contadorSim + 1;
     }
     if(pergunta5 === "sim") {
          contadorSim = contadorSim + 1;
     }

     return contadorSim;
}

function veredito(contadorSim){
     if(contadorSim === 5) {
          console.log("Assassino!");
     } else if(contadorSim === 4 || contadorSim === 3) {
          console.log("Cumplice!");
     } else if(contadorSim === 2) {
          console.log("Suspeito!");
     } else {
          console.log("Inocente");
     } 
     
}


veredito(questionario());