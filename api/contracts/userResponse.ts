export default function userResponse(object: any): UserResponseContract {
    if (object) {
        const {id, username, email} = object
        return {
            id, 
            username, 
            email
        }
    }
    
    return null
}

class UserResponseContract {
    id: string
    username: string
    email: string
}

export {
    UserResponseContract
}