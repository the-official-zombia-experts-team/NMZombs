const logger = (req, res, next) => {
    console.log(`[${new Date()}] User with UserAgent ${req.get("User-Agent")} requested [${req.method}] ${req.originalUrl}`);
    next();
};

module.exports = {
    logger
};
