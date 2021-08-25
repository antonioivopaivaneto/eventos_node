module.exports = function(app){
     var valida = require('./../middlewares/valida');
     // vamos criar uma variável para referenciar nosso controller
     var homec = app.controllers.homec;
     var eventosc = app.controllers.eventosc;
     var usuariosc = app.controllers.usuariosc;
 
     app.get('/', homec.index);
     // usamos o get para entender a requisição feita no browser para a aplicação e saber o que devemos fazer ou carregar ao receber a requisição
     app.post('/login', homec.login);
     app.get('/logout', homec.logout);
 
     app.get('/eventos', valida, eventosc.listar);
     app.get('/eventos/listar', valida, eventosc.listar);
 
     app.get('/usuarios/novo', valida, usuariosc.novo);
     app.get('/usuarios/listar', valida, usuariosc.novo);
     app.post('/usuarios/novo/criar', valida, usuariosc.criar);
     
     app.get('/eventos/novo', valida, eventosc.novo);
     app.post('/eventos/novo', valida, eventosc.criar);
 }