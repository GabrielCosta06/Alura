const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@gmail.com",
    telefone: ["115555550", "114444444"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log('saldo insuficiente');
        } else {
            this.saldo -= valor;
            console.log(`Pagamento efetuado. Novo saldo: R$${this.saldo}`)
        }
    }
  };

  cliente.efetuaPagamento(100);
