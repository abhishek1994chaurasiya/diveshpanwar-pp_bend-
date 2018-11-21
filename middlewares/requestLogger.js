var requestLogger = function(req, res, next) {
    console.log('Accessed ', req.url, 'at Time: ', new Date(Date.now()));
    next()
}

module.exports = requestLogger;