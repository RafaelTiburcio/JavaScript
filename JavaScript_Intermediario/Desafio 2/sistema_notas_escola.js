const aluno1 = {
    nomeAluno : "Rafael",
    nota1 : 10,
    nota2 : 9,
    nota3 : 5,
    nota4 : 6,
    mediaFinal : function() {
        return (this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4;
    },
    situacao : function() {
        if (this.mediaFinal() > 6) {
            return "Aprovado"
        } else {
            return "Reprovado"
        }
    },
    
    exibir() {
        return `O Aluno ${this.nomeAluno} teve sua media final no total de ${this.mediaFinal()} e encontra-se ${this.situacao()} `
    }

}

console.log(aluno1);
console.log(aluno1.exibir());