const userModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try {
        // get infor from client
        const { username, password, email } = req.body;
        // create data to database
        await userModel.create({
            username: username,
            password: bcrypt.hashSync(password, 10),
            email: email,
            role: 'regular',
        });
        return res.status(200).send('register user');
    } catch (error) {
        console.log('error', error);
    }
    
};


module.exports = {
    register: register,
};
