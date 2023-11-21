function apresentar(nome) {
    return `meu nome é ${nome}`;
}

// Arrow Function
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow Function com + de 1 linha de instrução

const somaPequenosNumeros = (num1, num2) => {
    if (num1 >= 10 && num2 >= 10) {
        return 'somente números de 1 a 9'
    } else {
        return num1 + num2;
    }
}

// Hoisting: a arrow function se comporta como expressão de função