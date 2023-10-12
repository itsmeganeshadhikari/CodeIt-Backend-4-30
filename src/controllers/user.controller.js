//User controller

const { generatePassword } = require("../lib/utils");
const User = require("../models/Users")

exports.createUser = async(req, res)=>{
    //database save
    try {
        const newUser =  new User(req.body);
        newUser.password = await generatePassword(newUser.password);
        const insertData = await newUser.save()
        res.status(200).send({status:'Success',data:insertData})
    } catch (error) {
        res.send({error:error})
    }
}

exports.getUser =(req, res) =>{
res.send({data:"Get user"})
}

exports.updateUser = (req, res) =>{
    console.log('update user');
}

exports.deleteUser = () =>{
    console.log('Delete user');
}