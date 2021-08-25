module.exports = function(app){
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var usuario = Schema({
        nome: {
            type: String,
            required: true,
            index: { unique: true }
        },
        senha: {
            type: String,
            required: true
        }
    });

    // o retorno do model se dá colocando o nome da collection (usuarios) e a variavel que criamos com a estrutura de dados necessária para o cadastro/manipulação dos dados
    return mongoose.model('usuarios', usuario)
}