import { UserResponseContract } from "../api/contracts/userResponse"
import jwt from "jsonwebtoken"

class Security {
    static getUserFromToken(token: string): UserResponseContract | null {
        token = token.replace('Bearer ', '')

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // @ts-ignore
            return decoded.userT
        } catch {
            return null
        }
    }
}

export default Security