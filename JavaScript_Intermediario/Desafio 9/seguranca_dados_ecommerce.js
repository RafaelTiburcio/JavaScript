const usuario = {
    nome: "José Cardoso",
    email: "joose@gmail.com",
    senha: "123456"
}

function decodificarSenha(senha) {
    let senhaDecodificada = "";
    for(let letra of senha){
        senhaDecodificada += "*";
    }
    return senhaDecodificada;
}

usuario.senha = decodificarSenha(usuario.senha);
console.log(usuario);