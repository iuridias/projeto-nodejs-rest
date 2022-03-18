const customExpress = require('./config/custom-express');
const conexao = require('./infraestrutura/conexao');

conexao.connect(erro => {
  if(erro) {
    console.log(erro)
  } else {
    console.log('Conexão com MySql bem sucedida!!');
    const app = customExpress();

    app.listen(3000, () => console.log("Servidor rodando na porta 3000."));
  }
});