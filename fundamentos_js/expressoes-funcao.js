// diferença principal: hoisting
// funções e var são 'listados' no topo do arquivo

// declaração de função

console.log(apresentar())

function apresentar() {
    return 'olá';
}

// expressão de função

const soma = function (num1, num2) {
    return num1 + num2;
}

console.log(soma(1, 1))