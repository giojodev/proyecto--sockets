var express=require('express');
var app=express();
var server=require('http').Server(app);
var io= require('socket.io')(server);

app.use(express.static('client'));

app.get('/holamundo',function(req,res){
res.status(200).send('hola mundo desde ruta')
})

io.on('connection',function(socket){
    console.log("El nodo con ID: "+socket.handshake.address+" se ha conectado");
})

server.listen(6677,function(){
    console.log('Servidor esta funcionando en http:localhost:6677')
})
