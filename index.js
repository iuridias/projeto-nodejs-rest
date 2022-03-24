const customExpress = require('./config/custom-express');
const conexao = require('./infraestrutura/database/conexao');
const Tabelas = require('./infraestrutura/database/tabelas');

conexao.connect(erro => {
  if(erro) {
    console.log(erro)
  } else {
    console.log('Conexão com MySql bem sucedida!!');

    Tabelas.init(conexao);

    const app = customExpress();

    app.listen(3000, () => console.log("Servidor rodando na porta 3000."));
  }
});