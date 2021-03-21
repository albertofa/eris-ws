import dbCon from './context';

class Server {
    static getServers(userId: string, values: (messages: ServerModel[]) => void): void{
        dbCon.query(
            `SELECT 
                s.id, 
                s.name,  
                s.created_at
            FROM server AS s
            JOIN member AS m on m.server_id = s.id
            WHERE m.user_id = '${userId}'
            ORDER by s.created_at`, 
            (error, results, fields) => {
                values(results.map((message: any) => new ServerModel().createFromDatabase(message)));
            }
        )
    }

    static create(id: string, name: string): void {
        dbCon.query(`INSERT INTO 
                        server (id, name, created_at)
                        VALUES ('${id}', '${name}', '${new Date().toISOString().substr(0, 19)}')
                    `)
    }

    static get(id: string, value: (message: ServerModel | null) => void): void {
        dbCon.query(
            `SELECT 
                s.id, 
                s.name,  
                s.created_at
            FROM server AS s
            WHERE s.id = '${id}'`, 
            (error, results, fields) => {
                if(results.length > 0)
                    value(new ServerModel().createFromDatabase(results[0]));
                else 
                    value(null) 
            }
        )
    }
}

class ServerModel {
    id: string
    name: string
    createdAt: Date

    createFromDatabase(object: any): ServerModel {
        this.id = object.id
        this.name = object.content
        this.createdAt = object.created_at

        return this
    }
}

export default Server

export {
    ServerModel
}