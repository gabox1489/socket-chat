var socket = io();

//LEER POR PARAMETRO LO QUE SEA QUE VENGA CON EL NOMBRE DEL USUARIO Y ASI NO SE DUPLIQUEN

var params = new URLSearchParams(window.location.search);

if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('El nombre y sala son necesarios');
}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
};

socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('entrarChat', usuario, function(resp) {
        console.log('Usuarios conectados', resp);

        return resp;
    });
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
//socket.emit('crearMensaje', {
//nombre: 'Gabriel',
// mensaje: 'Welcome to Node JS'
//}, function(resp) {
//console.log('respuesta server: ', resp);
//});

// Escuchar información
socket.on('crearMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);

});

//ESCUCHAR CAMBIOS DE USUARIOS
//CUANDO UN USUARIO ENTRA O SALE DEL CHAT

socket.on('listaPersona', function(personas) {
    console.log(personas);
});

//MENSAJES PRIVADOS (escuchar la accion del cliente)

socket.on('mensajePrivado', function(mensaje) {
    console.log('Mensaje Privado:', mensaje);
});