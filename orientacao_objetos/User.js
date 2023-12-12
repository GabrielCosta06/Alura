export default class User {
  constructor(nome, email, role, nascimento, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.role = role || "estudante";
    this.ativo = ativo;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}`;
  }
}

// const novoUser = new User("Gabriel", "gabriel@gmail.com");
// console.log(novoUser, novoUser.exibirInfos());
