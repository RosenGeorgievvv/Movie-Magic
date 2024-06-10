const {User} = require('../models/User');
const bcrypt = require('bcrypt');

async function register(username, password){

    const existing = await username.findOne({email});

    if(existing){
        throw new Error('Email is already used');
    }
    const user = new User({
        email,
        password: await bcrypt.hash(password, 10)
    })

   await user.save();
   return user;
}

async function login(username, password){
    
}
module.exports = {
    register,
    login
}