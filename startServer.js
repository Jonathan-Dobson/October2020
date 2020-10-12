require("dotenv").config();

const fs = require('fs')
const https = require('https')
const express = require('express')
const mongo = require('./server/startup/connectMongodb')
const app = express().disable('x-powered-by')
const connectMiddleware = require('./server/startup/connectMiddleware')

const { SSL_PORT, SSL_CERT_FILE, SSL_CERT_KEY } = process.env

connectMiddleware(app)

const ssl_server = https.createServer({
    cert: fs.readFileSync(SSL_CERT_FILE),
    key: fs.readFileSync(SSL_CERT_KEY),
}, app).listen(SSL_PORT || 7000, v => {
    console.log(`Secure Server listening on port ${SSL_PORT}`)
})

ssl_server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

mongo.then(e => console.log(e)
).catch(e => console.log('Error: Unable to connect to Mongodb'));