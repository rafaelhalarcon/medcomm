const getApiTokenFromHeader = require('./getApiTokenFromHeader')

const authMiddleware = function(req, res, next) {
    try {
        jwtUser = jwt.verify(getApiTokenFromHeader(req), keys.secretOrKey);
        req.authInfo = jwtUser;
        next();
    } catch (err) {
        console.log(err);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Unauthorized' }));
        res.sendStatus(401);
    }
  }
module.exports = authMiddleware