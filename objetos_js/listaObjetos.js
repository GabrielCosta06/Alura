const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@gmail.com",
  telefone: ["115555550", "114444444"],
};

cliente.enderecos = [
  {
    rua: "R. Dirce Agriteli",
    numero: 111,
    apartamento: false,
  },
];

cliente.enderecos.push({
  rua: "R. Verancio Del",
  numero: 434,
  apartamento: true,
  complemento: "ap 131",
});

const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

console.log(cliente);
console.log(listaApenasApartamentos)
