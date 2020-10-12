module.exports = (indexPath) => (req, res, next) => {
    if (/^\/api\/.{0,}/gi.test(req.params[0])) {
        return next()
    }
    return res.sendFile(indexPath)
}