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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(`A encomenda será entregue para ${encomenda.destinatario} neste endereço: ${encomenda.rua}, ${encomenda.numero}.`)