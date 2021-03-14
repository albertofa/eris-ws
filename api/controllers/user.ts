import userModel, { UserModel } from '../models/user'
import bcrypt from 'bcrypt';
const saltRounds = 10;
import { nanoid } from 'nanoid'

class UserController {
    static async createNewUser(username: string, password: string, email: string, callback: (user: UserModel) => void): Promise<void> {
        //verify email exists

        const hashPass = await bcrypt.hash(password, saltRounds)
            
        const userId = nanoid()
        userModel.create(
            userId,
            this.generateUserHash(username),
            email,
            hashPass
        )
        userModel.getUserById(userId, value => callback(value))
    }

    static getUser(id: string, email: string, username: string, callback: (user: UserModel | null) => void): void {
        if (id)
            userModel.getUserById(id, value => callback(value))
        else if (email)
            userModel.getUserByEmail(email, value => callback(value))
    }

    static generateUserHash(username: string): string {
        const userHash = username+'#'+nanoid(5)
        //verify if exists

        return userHash
    }
}

export default UserController