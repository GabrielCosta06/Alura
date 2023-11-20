const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= 18) {
    console.log('cerveja');
} else {
    console.log('suco');
}

                    //condição             //true      //false  
console.log(idadeCliente >= idadeMinima ? 'cerveja' : 'suco');

const temFaculdade = false;

console.log(temFaculdade === false ? 'Não tem faculdade' : 'Tem faculdade')