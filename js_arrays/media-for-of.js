const notas = [6, 8, 4, 10];
 
let SomaDasNotas = 0;

for (let nota of notas) {
    SomaDasNotas += nota;
}

const media = SomaDasNotas / notas.length;

console.log(`A média é igual a: ${media}`)