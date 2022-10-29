const jwt = require('jsonwebtoken');
const userModel = require('../Models/UserModel');
const getListUser = async (req, res) => {
    // 1. get token from client
    const bearerHeader = req.headers['authorization'];
    const accessToken = bearerHeader.split(' ')[1];
    
    try {
        // 2. verifile token
        const decodeJwt = jwt.verify(accessToken, process.env.SECRET_JWT);
        if(decodeJwt) {
            const users = await userModel.find();
            res.status(200).send(users);
        }
    } catch (error) {
        // gui ma loi client de client biet refresh token
        console.log(error);
    }
    
}

const userDetail = (req, res) => {
    res.send('detail users');
}

module.exports = {
    getListUser: getListUser,
    userDetail: userDetail
}