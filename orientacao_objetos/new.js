function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function () {
    return `${this.nome}, ${this.email}`;
  };
}

// const novoUser = new User('Gabriel', 'gabriel@gmail.com')
// console.log(novoUser.exibirInfos())

// function Admin(role) {
//     User.call(this, 'Gabriel')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

const user = {
  init: function (nome, email) {
    this.nome = nome;
    this.email = email;
  },

  exibirInfos: function () {
    return this.nome;
  },
};

const novoUser = Object.create(user);
novoUser.init('Gabriel', 'g@g.com')
console.log(novoUser.exibirInfos("Gabriel"));
// console.log(user.isPrototypeOf(novoUser));
