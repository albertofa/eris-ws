import express from 'express'
const router = express.Router();
import messageController from '../controllers/message'
import security from '../../utils/security'

router.get('/', (req, res) => {
    const user = security.getUserFromToken(req.headers.authorization)

    if (user) {
        messageController.getMessages(null, null, null, messages => res.send(messages))
    } else {
        res.status(403).send('Invalid or expired token')
    }
   
})

export default router