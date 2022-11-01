const jwt = require('jsonwebtoken');


// check authentication
const isAuthentication = (req, res, next) => {
    try {
        const bearerHeader = req.headers['authorization'];
        const accessToken = bearerHeader.split(' ')[1];
        const decodeJwt = jwt.verify(accessToken, process.env.SECRET_JWT);
        next();
    } catch (error) {
        if(error instanceof jwt.TokenExpiredError) {
            return res.status(401).send('Token Expired');
        }
        return res.status(401).send('Authentication not valid');
    }
     
}

// check role is admin
const isAdmin = (req, res, next) => {
   
}


module.exports = {
    isAuthentication: isAuthentication,
    isAdmin: isAdmin
}