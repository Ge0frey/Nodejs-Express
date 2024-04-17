import express from 'express'

const app = express();

function middleWare1 (req, res, next) {
    console.log(`I am a middleware`)
}

function standardExpressCallback (requestObject, responseObject, nextMiddleware) {
    console.log(`I am the standard express function`)
    responseObject.send(`Hello world`)
}

app.get ('/', standardExpressCallback)

app.listen (3000);