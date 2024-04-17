import express from 'express'

const app = express();

function middleWare1 (req, res, next) {
    console.log(`I am middleware 1`)
    const errObj = new Error (`I am an error`)
    next(errObj)
}

function middleWare2 (req, res, next) {
    console.log(`I am middleware 2`)
    next()
}

function errorHandler (err, req, res, next) {
    const code = 404
   if (err) {
    res.send (`This is an error code: ${code}`)
}
}

app.use (middleWare1);
app.use(middleWare2)

app.get ('/' , (req, res, next) => {
    console.log(`I am the standard express function`)
    res.send(`This is an express App`)
})

app.use(errorHandler);

app.listen (3000);