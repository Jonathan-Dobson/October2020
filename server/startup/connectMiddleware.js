require("dotenv").config();
const path = require('path')
const helmet = require('helmet')
const morgan = require('morgan')
const apiRouter = require('../routes/apiRouter')
const express = require('express')
const toReactOrNot = require('./middleware/apiReactDecider')
const httpHeaderConfig = require('./middleware/httpHeaderConfig')

module.exports = (app) => {
    const staticPath = path.join(__dirname, '../../', process.env.FRONTEND_PATH)
    const indexPath = path.join(staticPath, 'index.html')
    
    app.use(express.static(staticPath, {
        index: 'index.html'
    }))

    const registermiddleware = [
        ['/', express.json()],
        ['/', morgan('dev')],
        ['/', helmet()],
        ['/', httpHeaderConfig(helmet)],
        ['*', toReactOrNot(indexPath)],
        ...apiRouter('/api')
    ].forEach(mw => app.use(...mw))

}