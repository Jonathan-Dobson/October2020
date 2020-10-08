module.exports = (err, req, res, next) => {
    console.log('errorHandler.js middlware has caught an error.')
    console.error(err);
    if (err.name === "UnauthorizedError") {
        // express-jwt gives the 401 status to the err object for us
        res.status(err.status);
    }
    return res.send({ message: err.message });
}