const personagem = {
  nome: "Goku",
  idade: 40,
  raca: "saiyajin",
};

const personagem2 = Object.create(personagem);

personagem2.nome = 'Vegeta'; 

console.log(personagem)
console.log(personagem2)