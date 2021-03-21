import express from 'express'
import history from 'connect-history-api-fallback'
import cors from 'cors'
import WebSocketServer from './websocket/webSocketServer'
import fs from 'fs'

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

const ws = new WebSocketServer(server)

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
    const wss = new WebSocketServer(serverHttps)
   
    serverHttps.listen(443, () => {
        console.log('Listening 443')
    })
}
