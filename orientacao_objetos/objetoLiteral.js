const user = {
    nome: 'Gabriel',
    email: 'gabriel@gmail.com',
    nascimento: '06/01/2006',
    role: 'admin',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email, this.nascimento, this.role, this.ativo)
    } 
}

const admin = {
    nome: 'Pedro',
    email: 'pedro@gmail.com',
    role: 'admin',
    criarCurso() {
        console.log('curso criado')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()