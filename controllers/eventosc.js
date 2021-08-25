module.exports = function(app){
    var Evento = app.models.eventosm;
    var moment = require('moment');

    var EventosController = {
        listar: function(request, response){
           Evento.find(function(erro, eventos){
               if(erro){
                   console.log("erro :"+ erro);
                   response.redirect('/');
               }else{
                var params = {
                     user: request.session.usuarioSession,
                     eventosList:eventos,
                     momentParam: moment
                    }
                    
                    response.render('eventos/listar', params);
               }       
        });
      },
        novo: function(request, response){
            var params = { user: request.session.usuarioSession }
            
            response.render('eventos/novo',params);
        },
        criar: function(request, response){
            var evento = request.body.evento;

            if(evento.descricao.trim().lenght === 0){
                console.log('descrição Vazia');
                response.redirect('/eventos/novo');
            }else{
                Evento.create(evento, function(erro,item){
                    if(erro){
                        console.log("Erro: "+ erro);
                        response.redirect('/eventos/novo');

                    }else{
                        console.log('eventos cadastrado: '+ item);
                        response.redirect('/eventos');
                    }
                }
                )}
        }
    };
    return EventosController;
}