
import io, { Socket } from 'socket.io'
import MessageController from '../api/controllers/message'
import security from '../utils/security'
import http from 'http'

class WebSocketServer{
    
    constructor(server: http.Server) {
        const wss = new io.Server(server,  { cors: { origin: '*' } })

        wss.on('connection', (socket: Socket) => {
            console.log('connected', socket.id)
            
            socket.on('newMessage', (data: any) => {
                const user = security.getUserFromToken(data.token)
                if (user) {
                    MessageController.createMessage(data.message, user.id, message => {
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
    }
}

export default WebSocketServer

