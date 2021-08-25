module.exports = function(app){
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var evento = Schema({
        descricao:{
            type:String,
            required:true
        },
        data:{
            type:Date,
            require:true
        },
        preco:{
            type:Number,
            require:true
        }
    });

    return mongoose.model('eventos', evento);
}