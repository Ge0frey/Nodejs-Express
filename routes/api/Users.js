import express from 'express';
import users from '../../Users.js';
import {v4 as uuidv4} from 'uuid';

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


//creating a new user
router.post ('/', (req, res) => {
    const newUser = {
        id: uuidv4(),
        name: req.body.name,
        email: req.body.email
    }

    if (!newUser.name || !newUser.email) {
        res.sendStatus(400)
    }

    users.push (newUser)
    res.json(users)
})

//updating a user record

router.put ('/:id', (req, res) => {
    const found = users.some (user => user.id === parseInt (req.params.id));
    if (found) {
        const updateUser = req.body;
        users.forEach (user => {
            if (user.id === parseInt(req.params.id)) {
                user.name = updateUser.name ? updateUser.name : user.name
                user.email = updateUser.email ? updateUser.email : user.email
                res.json ({msg: 'User updated', user})
            }
        })
    }
})

export default router

