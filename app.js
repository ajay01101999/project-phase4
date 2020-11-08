const express = require('express');
const cors = require('cors');
// var path = require('path');
// var socketio = require('socket.io');
//var http = require('http');
const mongoDb = require('./db/db');

const register = require('./routes/userRegister');
const login = require('./routes/userLogin');
const event = require('./routes/userEvents');
const electronic = require('./routes/electronic');
const cloths = require('./routes/cloths');
const grocery = require('./routes/grocery');
const earphone = require('./routes/earphones');
const tv = require('./routes/tv');
const payment = require('./routes/payment');
const orders = require('./routes/orders');

const app = express();

app.use(express.json());
app.use(cors());

mongoDb();

app.use('/api/v1/register', register);
app.use('/api/v1/login', login);
app.use('/api/v1/event', event);
app.use('/api/v1/latest', electronic);
app.use('/api/v1/cloths', cloths);
app.use('/api/v1/grocery', grocery);
app.use('/api/v1/earphone', earphone);
app.use('/api/v1/tv', tv);
app.use('/payment', payment);
app.use('/api/v1/orders', orders);

// var server = http.createServer(app);
// var io = socketio(server);

// io.on('connection', (socket)=>{
//     var name;
//     socket.on('joinRoom', (name, roomId)=>{
//         name = name;
//         socket.join(roomId);
//         //for user who is connecting
//         socket.emit('message', `Welcome ${name} in the chat Room`, name);

//         //for all the users except who is connecting
//         socket.broadcast.to(roomId).emit('message', `${name} has joined the room.`, name);

//         socket.on('chatMessage', message=>{
//             io.to(roomId).emit('message', message, name);
//         })
//     });
//     // socket.on('disconnect', ()=>{
//     //     socket.emit('message', `${name} has left the room`);
//     // })
// })

app.listen(process.env.PORT || 1100, ()=>{
    console.log('server is started at 1100');
})