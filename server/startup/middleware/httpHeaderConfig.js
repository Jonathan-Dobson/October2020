module.exports = helmet => helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "storage.googleapis.com"],
        objectSrc: ["'none'"],
        imgSrc: ["'self'"],
        upgradeInsecureRequests: [],
    }
})