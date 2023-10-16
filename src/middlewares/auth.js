var jwt = require('jsonwebtoken');
const dotenv= require('dotenv').config();

exports.isAuth = async(email, password) =>{
    //using jwt method
    console.log(email,password);
}

exports.loginWithJwt = async(email)=>{
    console.log('in login jwt');
    try { 
        const token =  await jwt.sign({email}, process.env.SECRET_KEY,{ expiresIn: '1h' });
        return token;
    } catch (error) {
        console.log(error);
    }
}