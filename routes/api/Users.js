import express from 'express';
import users from '../../Users.js';

const router = express.Router();

router.get ('/', (req, res) => {
    res.json (users);
})

router.get ('/:id', (req,res) => {
    const found = users.some (user => user.id === parseInt (req.params.id))

        if (found) {
            res.json(users.filter(user => user.id === parseInt(req.params.id)))
        } else {
            res.sendStatus(400)
        }
})

export default router

