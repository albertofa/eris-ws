import express from 'express'
import history from 'connect-history-api-fallback'
import cors from 'cors'
import io, { Socket } from 'socket.io'
import fs from 'fs'
import MessageController from './api/controllers/message'
import security from './utils/security'

const expressServer = express()

expressServer.use(cors())
expressServer.use(express.json())

import securityRoutes from'./api/routes/security'
import userRoutes from './api/routes/user'
import messageRoutes from './api/routes/message'
import serverRoutes from './api/routes/server'

expressServer.use('/api/security', securityRoutes)
expressServer.use('/api/user', userRoutes)
expressServer.use('/api/message', messageRoutes)
expressServer.use('/api/server', serverRoutes);

const staticFileMiddleware = express.static('client')
expressServer.use(staticFileMiddleware)

expressServer.use(history({
    index: '/client/index.html'
}));
expressServer.use(staticFileMiddleware)

import http from 'http'
import https from 'https'
const server = new http.Server(expressServer)

const ws = new io.Server(server,  { cors: { origin: '*' } })
ws.on('connection', (socket: Socket) => {
    console.log('connected', socket.id)
    
    socket.on('newMessage', (data: any) => {
        const user = security.getUserFromToken(data.token)
        if (user) {
            MessageController.createMessage(data.message, user.id, (message: any) => {
                socket.broadcast.emit('newMessage', message)
                socket.emit('newMessage', message)
            })
        }
    })

    const connectedUsers: any = []
    socket.on('joinVoice', (data: string) => {
        console.log('joinVoice', connectedUsers)
        socket.join(data)
        connectedUsers.forEach((room: any) => {
            if (room != data && room)
                socket.to(room).emit('callVoice', data)
        });
        
        if (!connectedUsers.includes(data))
            connectedUsers.push(data)
    })
})

server.listen(8085, () => {
    console.log('Listening 8085')
})

if (process.env.IS_TLS == 'true'){
    const privateKey = fs.readFileSync('/etc/letsencrypt/live/li119-45.members.linode.com/privkey.pem', 'utf8');
    const certificate = fs.readFileSync('/etc/letsencrypt/live/li119-45.members.linode.com/cert.pem', 'utf8');
    const ca = fs.readFileSync('/etc/letsencrypt/live/li119-45.members.linode.com/chain.pem', 'utf8');
    
    const credentials = {
        key: privateKey,
        cert: certificate,
        ca: ca
    }
    const serverHttps = new https.Server(credentials, expressServer)
    const wss = new io.Server(serverHttps,  { cors: { origin: '*' } })
    wss.on('connection', (socket: Socket) => {
        console.log('connected', socket.id)
        
        socket.on('newMessage', (data: any) => {
            const user = security.getUserFromToken(data.token)
            if (user) {
                MessageController.createMessage(data.message, user.id, (message: any) => {
                    socket.broadcast.emit('newMessage', message)
                    socket.emit('newMessage', message)
                })
            }
        })

        const connectedUsers: any = []
        socket.on('joinVoice', (data: string) => {
            console.log('joinVoice', connectedUsers)
            socket.join(data)
            connectedUsers.forEach((room: any) => {
                if (room != data && room)
                    socket.to(room).emit('callVoice', data)
            });
            
            if (!connectedUsers.includes(data))
                connectedUsers.push(data)
        })
    })
   
    serverHttps.listen(443, () => {
        console.log('Listening 443')
    })
}
