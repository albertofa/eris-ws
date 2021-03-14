import express from 'express'
const router = express.Router();
import userController from '../controllers/user'
import userResponse from '../contracts/userResponse'
import security from '../../utils/security'

router.get('/:id', (req, res) => {
    userController.getUser(req.params.id, null, null, c => res.send(userResponse(c)))
})

router.get('/', (req, res) => {
    const user = security.getUserFromToken(req.headers.authorization)

    if (user) {
        res.send(user)
    } else {
        res.status(403).send('Invalid or expired token')
    }
})

router.post('/', (req, res) => {
    const {username, password, email} = req.body
    userController.createNewUser(username, password, email, c => res.status(201).send(userResponse(c)))
})

export default router