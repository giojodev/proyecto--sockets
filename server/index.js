var express=require('express');
var app=express();
var server=require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/holamundo',function(req,res){
res.status(200).send('hola mundo desde ruta')
})

var messages=[{
    id:1,
    text:'Bienvenido al chat privado de Socket.IO y Node JS',
    nickname:'Bot - GIO'
}]

io.on('connection',function(socket){
    console.log("El nodo con ID: "+socket.handshake.address+" se ha conectado");
    socket.emit('messages',messages);

    socket.on('add-message',function(data){
        messages.push(data);

        io.sockets.emit('messages',messages);
    })
})

server.listen(6677,function(){
    console.log('Servidor esta funcionando en http:localhost:6677')
})
