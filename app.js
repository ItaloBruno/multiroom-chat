// Importação de configurações do servidor
var application = require('./config/server');

// Colocando o servidor para escutar a porta 8080
application.listen(8080, function(){
    console.log('Servidor rodando na porta 8080');
});