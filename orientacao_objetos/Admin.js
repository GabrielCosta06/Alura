import User from './User.js';

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
}

const novoAdmin = new Admin('Pedro', 'p@p.com', '06-02-2000')
console.log(novoAdmin.exibirInfos())