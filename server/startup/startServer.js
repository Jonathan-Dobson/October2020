require("dotenv").config();
const { SSL_PORT, SSL_CERT_FILE, SSL_CERT_KEY} = process.env

const [ path, fs, https, express, morgan, helmet, errorHandler, mainRouter ] = 
['path','fs','https','express','morgan','helmet','./errorHandler','../routes/mainRouter']
.map(e=>require(e))

const app = express().disable('x-powered-by')

const staticPath = express.static(process.env.STATIC_PATH,{
    index: 'index.html',
    setHeaders: function (res, path, stat) {
        res.set('Content-Security-Policy', "default-src 'self'; script-src-elem 'self' storage.googleapis.com")
      }
    })

const middleware = [
    [ '/',  express.json() ],
    [ '/',  morgan('dev') ],
    [ '/',  helmet() ],
    [ '/',  errorHandler ],
    [ '/',  staticPath ],
    ...mainRouter
].forEach(m=>app.use(m[0],m[1]))

const ssl_server = https.createServer({
    cert: fs.readFileSync(SSL_CERT_FILE),
    key: fs.readFileSync(SSL_CERT_KEY),
  },app).listen(SSL_PORT || 7000, v => {
    console.log(`Secure Server listening on port ${SSL_PORT}`)
})

ssl_server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

require('./connectMongodb').then(e => console.log(e)
).catch(e=>console.log('Error: Unable to connect to Mongodb'));