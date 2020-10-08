module.exports = [
    [ '/user',      require('./user/userRouter')],
    [ '/',          require('./jwt')],
    [ '/endpoint',  require('./endpoint/Router')]
]
