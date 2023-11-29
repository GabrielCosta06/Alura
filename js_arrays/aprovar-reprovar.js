const alunos = ['Pedro', 'Roberto', 'Thomas', 'Fernando'];
const medias = [7.5, 9, 3, 5];
const notaMedia = 7;

const alunosReprovados = alunos.filter((_, indice) => {
    return medias[indice] < notaMedia; 
});

const alunosAprovados = alunos.filter((_, indice) => {
    return medias[indice] >= notaMedia; 
});

console.log(`Alunos aprovados: ${alunosAprovados}\nAlunos reprovados: ${alunosReprovados}`);