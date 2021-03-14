import dbCon from './context';

class User {
    static getUserById(id: string, value: (user: UserModel | null) => void): void{
        dbCon.query(
            `SELECT 
                id, 
                username, 
                email, 
                password, 
                created_at,
                updated_at,
                last_logged_at
            FROM user
            WHERE id = '${id}'`, 
            (error, results, fields) => {
                if (results.length > 0)
                    value(new UserModel().createFromDatabase(results[0]))
                else
                    value(null)
            }
        );
    }

    static getUserByEmail(email: string, value: (user: UserModel | null) => void): void{
        dbCon.query(
            `SELECT 
                id, 
                username, 
                email, 
                password, 
                created_at,
                updated_at,
                last_logged_at
            FROM user
            WHERE email = '${email}'`, 
            (error, results, fields) => {
                if (results.length > 0)
                    value(new UserModel().createFromDatabase(results[0]))
                else
                    value(null)
            }
        );
    }

    static create(id: string, username: string, email: string, password: string): void {
        dbCon.query(`INSERT INTO 
                        user (id, username, email, password, created_at)
                        VALUES ('${id}', '${username}', '${email}', '${password}', '${new Date().toISOString().substr(0, 19)}')
                    `)
    }
}

class UserModel {
    id: string
    username: string
    email: string
    password: string
    createdAt: Date
    updateAt: Date | null
    lastLoggedAt: Date | null

    createFromDatabase(object: any): UserModel{
        this.id = object.id
        this.createdAt = object.created_at
        this.email = object.email
        this.lastLoggedAt = object.last_logged_at
        this.password = object.password
        this.updateAt = object.update_at
        this.username = object.username

        return this
    }
}

export default User

export {
    UserModel
}