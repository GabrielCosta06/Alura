// parâmetros de função



// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade('Gabriel', 17))

function soma(numero1, numero2) {
    return numero1 + numero2;
}

// console.log(soma(2, 2))

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(2, 16), soma(67, 29)))