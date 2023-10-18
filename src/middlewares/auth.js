var jwt = require('jsonwebtoken');
const Role = require('../models/Role');
const User = require('../models/Users');
const dotenv= require('dotenv').config();

exports.isAuth = async(email, password) =>{
    //using jwt method
    console.log(email,password);
}

exports.loginWithJwt = async(email)=>{
    try { 
        const token =  await jwt.sign({email}, process.env.SECRET_KEY,{ expiresIn: '1h' });
        this.validateToken(token)
        return token;
    } catch (error) {
        console.log(error);
    }
}

exports.validateToken = async(token) =>{
    try {
        var decoded = await jwt.verify(token, process.env.SECRET_KEY);
        return decoded.email
    } catch (error) {
        console.log(error);
    }
}

exports.isRole = async(req, res,next) =>{
    const token = req.headers.authorization;
    const newToken = token.split(" ")[1]
    console.log(newToken);
    try {
        const email = await this.validateToken(newToken);
        const newUser  = await User.findOne({email:email}).populate('role');
        if(newUser){
            if(newUser.role.name == "admin" || newUser.role.name =="super_admin"){
                next();
            }else{
                res.send({message:'Access denied'})
            }
        }else{
            res.status(200).send({message:"User not found"})
        }
    } catch (error) {
        console.log(error);
    }
    
}