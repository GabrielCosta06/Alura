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
  
  const chavesDoObjeto = Object.keys(cliente);

  console.log(chavesDoObjeto)

   if (!chavesDoObjeto.includes('enderecos')) {
     console.error('Erro. É necessário ter um enderçeo cadastrado')
   }