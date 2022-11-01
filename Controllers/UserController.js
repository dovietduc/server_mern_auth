const jwt = require('jsonwebtoken');
const userModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const getListUser = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).send(users);
    } catch (error) {
       // logs error
    }
}

const postUser = (req, res) => {
    
    // 1. get token from client
    const bearerHeader = req.headers['authorization'];
    const accessToken = bearerHeader.split(' ')[1];

    try {
        // 2. verifile token
        const decodeJwt = jwt.verify(accessToken, process.env.SECRET_JWT);

        if(decodeJwt && decodeJwt.role === 'admin') {
            // 3. save data to user collection
            const { username, password, email, role } = req.body;
            userModel.create({
                username: username,
                password: bcrypt.hashSync(password, 10),
                email: email,
                role: role,
            });
            res.status(200).send('create user success');
        }
    } catch (error) {
       
    }
    
}

module.exports = {
    getListUser: getListUser,
    postUser: postUser
}