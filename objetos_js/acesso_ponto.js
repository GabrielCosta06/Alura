const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "12312314",
  email: "andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);
console.log(`Os 3 primeiros dígitos do CPF são ${cliente.cpf.substring(0, 3)}`);

const carro = {
  marca: "chevrolet",
  ano: "2021",
  estaQuitado: true,
  precisaDeManutencao: false,
  pneuNovos: false,
};

console.log(
  `O carro é um ${carro.marca}, do ano ${carro.ano}, ${
    carro.estaQuitado ? "está quitado" : "não está quitado"
  } e ${
    carro.precisaDeManutencao ? "precisa de manutenção" : "está topíssimo"
  }, e ${carro.pneuNovos ? "os pneus são novos!" : "os pneus estão carecas!"}
  `
);
