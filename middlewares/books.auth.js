function auth(req, res, next) {
    let isVarified = true;
    if(isVarified) {
        console.log("Logged in successfully")
        next()
    } else{
        console.log("Not authorized")
        throw Error;
    }
}


module.exports= auth