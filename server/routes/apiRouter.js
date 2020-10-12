module.exports = prefix => [
    [ prefix+'/user',      require('./user/userRouter')    ],
    [ prefix+'/',          require('../startup/middleware/expressjwt')                ],
    [ prefix+'/endpoint',  require('./endpoint/Router')    ]
]
