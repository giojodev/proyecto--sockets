
var socket=io.connect('localhost:6677',{'forceNew':true});

socket.on('messages',function(data){
    console.log(data)
    render(data);
});

function render(data){
    var html=data.map(function(message,index){
        return (`
        <div class="message">
        <strong>${message.nickname}</strong> dice:
        <p>${message.text}</p>
        </div>
        `);
}).join(' ');
document.getElementById('messages').innerHTML= html;
}