function meuIndexOf(palavra, letra) {
    for(let i = 0; i < palavra.length; i++){
        if(palavra[i] === letra) {
            return i;
        }
    }
    return -1;
}

function meuIncludes(palavra, letra) {
    for(let i = 0; i < palavra.length; i++) {
        if(palavra[i] === letra) {
            return true;
        }
    }
    return false;
}

console.log(meuIndexOf("rafael", "l"));
console.log(meuIncludes("barbara", "a"));


let frase = "Meu trabalho é uma merda";
let frase2 = "nao troco as palavras de proposito"

function trocaLetra(frase) {
    
    let fraseTrocada = "";
    for(let letra of frase) {
        if(letra === "r") {
            fraseTrocada +="l";
        }else {
            fraseTrocada += letra;
        }
    }

    return fraseTrocada;
}

console.log(trocaLetra(frase));
console.log(trocaLetra(frase2));