import express from 'express'

const app = express();

app.use (middleWare1);
app.use(middleWare2)

function middleWare1 (req, res, next) {
    console.log(`I am middleware 1`)
    next()
}

function middleWare2 (req, res, next) {
    console.log(`I am middleware 2`)
    next()
}

function middleWare3 (req, res, next) {
    console.log(`I am middleware 3`)
    next()
}

app.get ('/' ,middleWare3 , (req, res, next) => {
    console.log(`I am the standard express function`)
    res.send(`This is an express App`)
})

app.listen (3000);