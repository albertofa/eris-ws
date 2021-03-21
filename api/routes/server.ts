import express from'express'
const router = express.Router();
import ServerController from '../controllers/server';

router.get('/', (req, res) => {
    const { userId } = req.query
    ServerController.getServers(userId.toString(), servers => {
        res.send(servers)
    })
})

router.post('/', (req, res) => {
    const { name } = req.body

    ServerController.createServer(name, server => {
       res.send(server)
    })
})

export default router;