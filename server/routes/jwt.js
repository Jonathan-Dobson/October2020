const jwt = require('express-jwt')

console.log('using express JWT');

module.exports = jwt({ 
    secret: process.env.SECRET, 
    algorithms: ['HS256'] 
})