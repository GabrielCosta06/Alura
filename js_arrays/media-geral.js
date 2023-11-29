const salaPython = [6, 8, 3 ,4 ,9, 8, 7.5, 8.5, 6.5, 7, 5];
const salaJS = [7, 8, 4, 3, 9, 5, 7];
const salaJava = [6, 5, 5.5 ,4.5, 3, 10];

function calcularMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);
    
    const media = somaDasNotas / notasDaSala.length;

    return Math.round(media);
}

console.log(`A média da sala de Python é: ${calcularMedia(salaPython)}`)
console.log(`A média da sala de Python é: ${calcularMedia(salaJS)}`)
console.log(`A média da sala de Python é: ${calcularMedia(salaJava)}`)