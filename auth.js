
  
function auth(req, res, next) {
    console.log(req.headers);
    let authHeader = req.headers.authorization;
    if (!authHeader) {
        let err = new Error("Auth header not set");
        res.setHeader("WWW-Authenticate", "Basic");
        err.status = 401;
        return next(err);
    }
    let auth = new Buffer.from(authHeader.split(' ')[1], "base64")
        .toString().split(":");
    if (auth[0] === 'admin' && auth[1] === 'admin') {
        next();
    } else {
        let err = new Error("Auth header not set");
        res.setHeader("WWW-Authenticate", "Basic");
        err.status = 401;
        return next(err);
    }
}
module.exports = auth;