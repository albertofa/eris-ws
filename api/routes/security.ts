import express from'express'
const router = express.Router();
import userController from '../controllers/user'
import bcrypt from 'bcrypt';
import userResponse from '../contracts/userResponse'
import jwt  from 'jsonwebtoken';

router.get('/token', (req, res) => {
    const { email, password } = req.query
    userController.getUser(null, email.toString(), null, user => {
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const userT = userResponse(user)
                    const token = jwt.sign({ userT }, process.env.JWT_SECRET);
                    res.send({
                        token
                    }) 
                } else {
                    res.status(401).send('Invalid email or password!') 
                }
            });
        } else {
            res.status(401).send('Invalid email or password!') 
        }
    })
})

router.delete('/token', (req, res) => {
    res.send('It works!')
})

export default router;