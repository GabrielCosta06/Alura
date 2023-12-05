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

for (let chave in cliente) {
  let tipo = typeof cliente[chave];
  if (tipo !== "object" && tipo !== "function") {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
  }
}
