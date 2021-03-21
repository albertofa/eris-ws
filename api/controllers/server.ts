import { nanoid } from 'nanoid'
import server, { ServerModel } from '../models/server'

export default class ServerController {
    static getServers(userId: string, callback: (messages: ServerModel[]) => void): void {
        server.getServers(userId, callback)
    }

    static createServer(name: string, callback: (message: ServerModel) => void): void {
        const id = nanoid()
        server.create(id, name)
        server.get(id, callback)
    }
}