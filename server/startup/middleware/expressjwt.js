const jwt = require('express-jwt')

console.log('using express JWT');

function handleErrors(err, req, res, next){
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('invalid token...');
      }
}

module.exports = jwt({ 
    secret: process.env.SECRET, 
    algorithms: ['HS256'] 
},handleErrors)