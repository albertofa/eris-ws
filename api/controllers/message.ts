import { nanoid } from 'nanoid'
import message, { MessageModel } from '../models/message'

export default class MessageController {
    static getMessages(start: Date | null, end: Date | null, userId: string | null, callback: (messages: MessageModel[]) => void): void {
        message.getMessages(start, end, userId, callback)
    }

    static createMessage(content: string, userId: string, callback: (message: MessageModel) => void): void {
        const id = nanoid()
        message.create(id, content, userId)
        message.get(id, callback)
    }
}