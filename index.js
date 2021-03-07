const express = require('express')();
const history = require('connect-history-api-fallback');
const cors = require('cors')
const http = require('http').Server(express);
const io = require('socket.io')(http,  { cors: {origin: '*'}})
const { nanoid } = require('nanoid')

express.use(cors())
// Middleware for serving '/dist' directory
const staticFileMiddleware = require('express').static('dist');

// 1st call for unredirected requests 
express.use(staticFileMiddleware);

express.get('/login', (req, res) => {
    res.send(nanoid())
})

express.use(history({
    index: '/dist/index.html'
}));

express.use(staticFileMiddleware);

io.on('connection', ws => {
    console.log('connected')
    
    ws.on('message', function incoming(data) {
        console.log('received ' + JSON.stringify(data))
        if (data.type == 'newMessage') {
            ws.emit('newMessage', {
                type: 'newMessage',
                user: data.user,
                message: { user: data.message.user, content: data.message.content }
            })
        }
    })

    ws.on('messageHistory', (data) => {
        ws.send({
            type: 'messageHistory',
            messages: [
                { user: 'User 1', content: 'Mensagem 1 teste'},
                { user: 'User 2', content: 'Mensagem 2 teste'}
            ]
        })
    })

    
})

http.listen(8085, () => {
    console.log('Listening 8085')
})

