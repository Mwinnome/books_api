function logger (req, res, next) {
    console.log(`${req.method} ${req.originalurl} ${res.statusCode}` )
    next();
}

module.exports=logger