import express from 'express'
import history from 'connect-history-api-fallback'
import cors from 'cors'
import { nanoid } from 'nanoid'
import MessageController from './api/controllers/message'
import security from './utils/security'

const expressServer = express()

expressServer.use(cors())
expressServer.use(express.json())

import securityRoutes from'./api/routes/security'
import userRoutes from './api/routes/user'
import messageRoutes from './api/routes/message'

expressServer.use('/api/security', securityRoutes)
expressServer.use('/api/user', userRoutes);
expressServer.use('/api/message', messageRoutes);

const staticFileMiddleware = express.static('client')
expressServer.use(staticFileMiddleware)

expressServer.use(history({
    index: '/client/index.html'
}));
expressServer.use(staticFileMiddleware)

import http from 'http'
const server = new http.Server(expressServer)

import io from 'socket.io'
const ws = new io.Server(server,  { cors: {origin: '*'}})

ws.on('connection', (socket: any) => {
    console.log('connected')

    socket.on('newMessage', (data: any) => {
        console.log(data)
        const user = security.getUserFromToken(data.token)
        if (user) {
            MessageController.createMessage(data.message, user.id, message => {
                socket.broadcast.emit('newMessage', message)
                socket.emit('newMessage', message)
            })
        }
    })
    
})

server.listen(8085, () => {
    console.log('Listening 8085')
})
