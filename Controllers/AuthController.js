const userModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

const login = async (req, res) => {
    // check email exit
    const user = await userModel.findOne({email: req.body.email});
    if(!user) {
        return res.status(400).send('Invalid Email Or Password');
    }

    // check Password
    const isPassvalid = bcrypt.compareSync(req.body.password, user.password);
    if(!isPassvalid) {
        return res.status(400).send('Invalid Email Or Password');
    }

    const jwtToken = jwt.sign({
        _id: user.id,
        username: user.username,
        role: user.role
    }, 'jwtSecret', {
        expiresIn: 10
    })

    return res.status(200).send({
        accessToken: jwtToken
    });

}

module.exports = {
    register: register,
    login: login
};
