const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ],
    corrigirProva:function(){
        let sum = 0;
        for (let i of prova.questoes)
          if (i.resposta === i.correta) {
            sum++;
          }
        return `O alunoª ${prova.aluno} acertou ${sum} questões e obteve nota ${
          (prova.valor / prova.questoes.length) * sum
        }`;
    }
};
console.log(prova.corrigirProva(prova))
