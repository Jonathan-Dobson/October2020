module.exports = [
    // [ '/',          require('./assetsRouter')    ],
    [ '/user',      require('./user/userRouter')    ],
    [ '/',          require('./jwt')                ],
    [ '/endpoint',  require('./endpoint/Router')    ]
]
