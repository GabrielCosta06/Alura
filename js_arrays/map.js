const notas = [10, 9.5, 5, 10, 8];

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : ++nota;
})

console.log(notasAtualizadas)
