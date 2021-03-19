import dbCon from './context';
import userResponse, { UserResponseContract } from '../contracts/userResponse'

class Message {
    static getMessages(start: Date | null, end: Date | null, userId: string | null, values: (messages: MessageModel[]) => void): void{

        const startFilter = start ? `AND created_at >= ${start.toISOString().substr(0, 19)}` : ""
        const endFilter = end ? `AND created_at <= ${end.toISOString().substr(0, 19)}` : ""
        const userFilter = userId ? `AND user_id = '${userId}'` : ""

        dbCon.query(
            `SELECT 
                m.id, 
                m.content,  
                m.created_at,
                user_id,
                username,
                email
            FROM message AS m
            JOIN user AS u ON u.id = m.user_id
            WHERE 1=1
            
            ${startFilter}
            ${endFilter}
            ${userFilter}
            ORDER by m.created_at`, 
            (error, results, fields) => {
                values(results.map((message: any) => new MessageModel().createFromDatabase(message)));
            }
        );
    }

    static create(id: string, content: string, userId: string): void {
        dbCon.query(`INSERT INTO 
                        message (id, content, user_id, created_at)
                        VALUES ('${id}', '${content}', '${userId}', '${new Date().toISOString().substr(0, 19)}')
                    `)
    }

    static get(id: string, value: (message: MessageModel | null) => void): void {
        dbCon.query(
            `SELECT 
                m.id, 
                m.content,  
                m.created_at,
                user_id,
                username,
                email
            FROM message AS m
            JOIN user AS u ON u.id = m.user_id
            WHERE m.id = '${id}'`, 
            (error, results, fields) => {
                if(results.length > 0)
                    value(new MessageModel().createFromDatabase(results[0]));
                else 
                    value(null)
            }
        );
    }
}

class MessageModel {
    id: string
    content: string
    createdAt: Date
    user: UserResponseContract

    createFromDatabase(object: any): MessageModel {
        this.id = object.id
        this.content = object.content
        this.createdAt = object.created_at,
        this.user = {
            id: object.user_id,
            email: object.email,
            username: object.username,
        }

        return this
    }
}

export default Message

export {
    MessageModel
}