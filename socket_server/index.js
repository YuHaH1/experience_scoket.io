var app = require('express')();

const { Server } = require('socket.io');
const io = new Server(3333, {
    cors: {
        origin: ['http://localhost:5173']
    },

});



io.on('connection', (socket) => {

    console.log('connected');
    socket.on('chat message', (data) => {
        //相当于广播
        io.emit('broadcast message', { data })
    })
    socket.on("disconnect", (reason, details) => {
        console.log(details); // 400



    });


    // io.emit('broadcast message', { user, message: `${user}离开了房间`, date: new Date().toLocaleDateString() })



});

app.listen(3000, () => {
    console.log('alistening on *:3000');
});